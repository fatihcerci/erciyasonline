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

        <div class="row items-center justify-center q-pt-xl">
          <img src="~/assets/forgot_password2.svg" style="width:95%"/>
        </div>

      </div>

      <div :class="$q.screen.gt.md ? 'col-4 justify-center items-center' : 'col-grow'" style="border-left:1px solid #ebebeb;" class="row q-pa-lg">

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


            <p class="q-pl-sm card-text-color font-24" style="font-weight:800 !important;">{{ $t('forgotPassword.title') }}</p>
            <p class="q-pl-sm font-13 text-grey-6">{{ $t('forgotPassword.description') }}</p>

            <language />

            <q-form class="q-px-sm">
              <q-input
                v-on:keyup.enter="resetPassword"
                outlined
                clearable
                v-model="email"
                type="input"
                :label="$t('forgotPassword.email')"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>

              <div class="row q-pb-md q-col-gutter-md q-pt-md" >
                <VueRecaptcha
                  :sitekey="siteKey"
                  :load-recaptcha-script="true"
                  @verify="handleSuccess"
                  @error="handleError"
                ></VueRecaptcha>
              </div>

            </q-form>

            <q-card-actions class="q-pa-none q-px-sm justify-center">
              <q-btn
                unelevated
                size="lg"
                color="primary"
                @click="resetPassword"
                class="full-width text-white text-capitalize"
                :label="$t('forgotPassword.resetPassword')"
              />
            </q-card-actions>

            <div class="row text-right justify-center" >
              <a href="javascript:void(0)" class="q-pt-sm text-blue-5 font-13"  @click="goLoginPage()"> {{ $t('forgotPassword.goBackLogin') }}</a>
            </div>

          </q-card-section>


        </q-card>

      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref, onMounted, computed, toRefs, reactive} from "vue"
//import { useQuasar } from "quasar"
import { useRouter } from "vue-router"
//import usersService from "../services/usersService"
import notify from "../helpers/notification"
import { Api } from "../helpers/api"
import apiService from "../services/apiService"
import { VueRecaptcha } from 'vue-recaptcha'
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
    const { fetch } = apiService()

    const passwordFieldType = ref("password")
    const visibility = ref(false)
    const visibilityIcon = ref("visibility")

    const { t } = useI18n({ useScope: 'global' })

    const state = reactive({
      email: "",
      captcha: 0
    })

    const resetPassword = async () => {
      try {
        if(!state.captcha) {
          throw new Error(t('captcha'))
        }

        if(!state.email) {
          throw new Error("Lütfen e-mail adresini girin")
        }

        const bodyData = {
          email: state.email
        }

        await fetch("userop/reset_password", bodyData, true)
      } catch (e) {
        notify().error(e.message)
        router.push("/forgotpassword")
      }
    }

    const switchVisibility = () => {
      visibility.value = !visibility.value
      passwordFieldType.value = visibility.value ? "text" : "password"
      visibilityIcon.value = visibility.value ? "visibility_off" : "visibility"
    }

    const goLoginPage = () => {
      router.push("/login")
    }

    onMounted(async () => {
      /*
      if(hasUser()) {
        goHome()
      }
      */
    })

    const siteKey = computed(() => {
      //6LedtP4gAAAAAKBm1GWXalHnn6YEXlqpppqu9agg
      //6LedtP4gAAAAAGpFr7ZAoHZCIgbVHbKHtjAEgE8m
      return Api.Base.CaptchaSiteKey
    })

    const handleError = () => {
      state.captcha = 0
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
      goLoginPage,
      resetPassword,
      switchVisibility,
      handleSuccess,
      handleError,
      siteKey,
    }
  },
})
</script>
