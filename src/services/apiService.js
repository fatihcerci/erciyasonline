import { ref, onBeforeUnmount } from "vue"
import { api } from "boot/axios"
import cache from "../helpers/cache"
import { Api } from "../helpers/api"
import { Messages } from "../helpers/messages"
import { Loading, QSpinnerAudio, QSpinnerBall, QSpinnerBars, QSpinnerBox, QSpinnerClock, QSpinnerComment, QSpinnerCube, QSpinnerDots, QSpinnerFacebook, QSpinnerGears, QSpinnerGrid, QSpinnerHearts, QSpinnerHourglass, QSpinnerInfinity, QSpinnerIos, QSpinnerOrbit, QSpinnerOval, QSpinnerPie, QSpinnerPuff, QSpinnerRadio, QSpinnerRings, QSpinnerTail, useQuasar } from "quasar"
import { useRouter } from "vue-router"
import notify from "../helpers/notification"
import messageService from "../services/messageService"
import router from "src/router"


const dataList = ref()
const displayError = ref()
const displayMessages = ref()

const { getMessage } = messageService()

/**
 * THIS CONNECTS TO ICAP
 */
const apiService = () => {

  let timer
  const $q = useQuasar()
  const router = useRouter()

  onBeforeUnmount(() => {
    if (timer !== void 0) {
      clearTimeout(timer)
      $q.loading.hide()
    }
  })

  const fetch = async (method, bodyData, showProgress) => {

    if(showProgress) {
      Loading.show({
        spinner: QSpinnerHourglass,
        spinnerColor: 'white',
        spinnerSize: 180,
        backgroundColor: 'black',
        message: Messages.progress,
        messageColor: 'white',
        boxClass: 'font-22'
      })
    }

    if(localStorage.getItem("token")){
      bodyData.token = localStorage.getItem("token")
    }

    try {
      const url = `/api/v1/${method}`
      const response = await api.request({url: url,method: "POST", data: bodyData})
      const { data, status } = response
      dataList.value =  data
      displayError.value = !data.status.success
      displayMessages.value = getMessage(data.status.message)

      if(!data.status.success && data.status.message == "MSG0000") {
        localStorage.removeItem("token")
        localStorage.removeItem("sessionInfo")
        router.push("/login")
      }

      if(!data.status.success) { throw new Error(displayMessages.value) } else if(data.status.success && data.status.message) { notify().success(displayMessages.value, "top") }
    } catch (error) {
        notify().error(error.message)
    } finally {
      Loading.hide()
    }
  }

  return {
    // PROPERTIES
    router,
    dataList,
    displayError,
    displayMessages,
    // FUNCTIONS
    fetch
  }
}

export default apiService
