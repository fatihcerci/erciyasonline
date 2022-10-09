<template>
  <q-page class="row">
    <div
      class="
        full-width
        row
      "
    >
      <div v-if="$q.screen.gt.md" :class="$q.screen.gt.md ? 'col-8' : 'col-grow'" class="items-center justify-center bg-grey-2">

          <q-toolbar class="q-py-sm q-px-md">

            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg">
                </q-avatar>
              </q-item-section>
              <q-item-section style="color:#6610f2 !important; font-weight: 800 !important; font-size: 1.45rem;">FONKERA</q-item-section>
            </q-item>

          </q-toolbar>

        <div class="row items-center justify-center">
          <img src="~/assets/login5.svg" style="width:95%" />
        </div>

      </div>



      <div :class="$q.screen.gt.md ? 'col-4 justify-center items-center' : 'col-grow'" style="border-left:1px solid #ebebeb;" class="row  q-pa-lg">



        <q-card flat square no-border class="full-width">

          <q-card-section>

            <q-item v-if="!$q.screen.gt.md" class="q-pb-xl">
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg">
                </q-avatar>
              </q-item-section>
              <q-item-section style="color:#6610f2 !important; font-weight: 800 !important; font-size: 1.45rem;">FONKERA</q-item-section>
            </q-item>


            <p class="q-pl-sm card-text-color font-24" style="font-weight:800 !important;">{{ $t('login.welcomeMessage') }}</p>
            <p class="q-pl-sm font-13 text-grey-6">{{ $t('login.loginDescription') }}</p>


            <language />

            <q-form class="q-px-sm">

              <q-input
                v-on:keyup.enter="doLogin"
                outlined
                clearable
                v-model="email"
                :label="$t('login.email')"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <div class="row text-right justify-end" >
                <a href="javascript:void(0)" class="q-pt-sm text-blue-5 font-13"  @click="goForgotPassword()"> {{ $t('login.forgotPassword') }}</a>
              </div>


              <q-input
                v-on:keyup.enter="doLogin"
                outlined
                clearable
                v-model="password"
                :type="passwordFieldType"
                :label="$t('login.password')"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="visibilityIcon"
                    @click="switchVisibility"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>


              <div class="row q-pb-md q-col-gutter-md q-pt-md" >
                <VueRecaptcha
                  :sitekey="siteKey"
                  :load-recaptcha-script="true"
                  @verify="handleSuccess"
                  @error="handleError"
                  v-on:keyup.enter="doLogin"
                ></VueRecaptcha>
              </div>

            </q-form>

            <q-card-actions class="q-pa-none q-px-sm justify-center">
              <q-btn
                unelevated
                size="lg"
                color="primary"
                @click="doLogin"
                class="full-width text-white text-capitalize"
                :label="$t('login.login')"
              />
            </q-card-actions>

          </q-card-section>


        </q-card>

      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref, onMounted, computed, toRefs, reactive } from "vue"
//import { useQuasar } from "quasar"
import { useRouter } from "vue-router"
//import usersService from "../services/usersService"
import notify from "../helpers/notification"
import { Api } from "../helpers/api"
import { VueRecaptcha } from 'vue-recaptcha'
import apiService from "../services/apiService"
import cryptoService from "../services/cryptoService"
import Language from "src/components/Language.vue"
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: "UserLogin",
  components: {
    VueRecaptcha,
    Language
  },
  setup() {
    const router = useRouter()
    //const $q = useQuasar()
    //const { login, logout, hasUser, sessionInfo, displayError, displayMessages } = usersService()
    const { fetch, dataList } = apiService()
    const { encrypt, decrypt } = cryptoService()
    const { t } = useI18n({ useScope: 'global' })

    const passwordFieldType = ref("password")
    const visibility = ref(false)
    const visibilityIcon = ref("visibility")
    const state = reactive({
      email: "fatihcerci001@gmail.com",
      password: "123456",
      captcha: 0
    })

    const doLogin = async () => {
      try {
        if(!state.captcha) {
          throw new Error(t('captcha'))
        }

        const bodyData = {
          email: state.email,
          password: state.password
        }

        await fetch("userop/login", bodyData, true)

        if (dataList.value.data) {
          localStorage.removeItem("sessionInfo")
          localStorage.setItem("sessionInfo",encrypt(JSON.stringify(dataList.value.data)))

          localStorage.removeItem("token")
          localStorage.setItem("token", JSON.parse(dataList.value.data).token)

          if(sessionStorage.getItem("redirectPath")) {
            router.push(sessionStorage.getItem("redirectPath"))
          } else {
            notify().success(t('welcome')+ " " + JSON.parse(dataList.value.data).name + " " + JSON.parse(dataList.value.data).surname, "top")
            router.push("/")
          }
        } else {
          router.push("/login")
        }
      } catch (e) {
        notify().error(e.message)
        router.push("/login")
      }
    }

    const switchVisibility = () => {
      visibility.value = !visibility.value
      passwordFieldType.value = visibility.value ? "text" : "password"
      visibilityIcon.value = visibility.value ? "visibility_off" : "visibility"
    }

    const goForgotPassword = () => {
      router.push("/forgotpassword")
    }

    onMounted(async () => {
      if(localStorage.getItem("sessionInfo")) {
        router.push("/")
      }
    })

    const siteKey = computed(() => {
      //6LedtP4gAAAAAKBm1GWXalHnn6YEXlqpppqu9agg
      //6LedtP4gAAAAAGpFr7ZAoHZCIgbVHbKHtjAEgE8m
      return Api.Base.CaptchaSiteKey
    })

    const handleError = () => {
      state.captcha = 0
      // Do some validation
    }

    const handleSuccess = (response) => {
      state.captcha = 1
    }

    return {
      router,
      passwordFieldType,
      visibility,
      visibilityIcon,
      ...toRefs(state),
      goForgotPassword,
      doLogin,
      switchVisibility,
      handleSuccess,
      handleError,
      siteKey
    }
  },
})

</script>
