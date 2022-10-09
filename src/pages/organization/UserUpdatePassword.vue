<template>
  <div class="row q-pa-sm q-pl-md q-pr-md">
    <div class="col-12">
      <q-card flat>
        <q-card-section>
          <div class="text-h6">Şifre Güncelle</div>
        </q-card-section>


        <q-card-section class="q-gutter-md">
          <q-input
            filled
            :type="passwordFieldType"
            v-model="password"
            label="Şifre"
            :rules="[val => !!val || 'Zorunlu alan']"
          >
            <template v-slot:prepend>
              <q-icon
                :name="visibilityIcon"
                @click="switchVisibility"
                class="cursor-pointer"
              />
            </template>
          </q-input>

          <q-input
            filled
            :type="passwordFieldTypeRepassword"
            v-model="repassword"
            label="Şifre Tekrar"
            :rules="[val => val==password || 'Şifre eşleştirilemedi', val => !!val || 'Zorunlu alan']"
          >
            <template v-slot:prepend>
              <q-icon
                :name="visibilityIconRepassword"
                @click="switchVisibilityRepassword"
                class="cursor-pointer"
              />
            </template>
          </q-input>

        <div>
          <q-btn label="Kaydet" color="primary" glossy @click="saveUser()"/>
          <q-btn label="Temizle" color="primary" glossy @click="onReset" class="q-ml-sm" />
        </div>

        </q-card-section>

      </q-card>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted, ref, toRefs, reactive } from "vue"
import { useQuasar, date } from 'quasar'
import { useRouter } from "vue-router"
import apiService from "../../services/apiService"
import userController from "../../controllers/userController"
import notify from "../../helpers/notification"

export default {
  name: "UserUpdatePassword",
  components: {

  },

  setup() {

    const { fetch, dataList } = apiService()

    const { selectedUser } = userController()

    const state = reactive({
      id : selectedUser.value ? selectedUser.value.id : null,
      password : null,
      repassword : null
    })

    const router = useRouter()

    onMounted(async () => {
      if(!selectedUser.value) {
        router.replace("/organization/users")
      }
    })

    const saveUser = async () => {
      try {
        if(state.password != state.repassword) {
          throw new Error("Şifreler eşleştirilemedi")
        }
        var bodyData = {
          id : state.id,
          password : state.password,
          repassword : state.repassword
        }

        await fetch("users/update_password", bodyData, true)
        if(dataList.value.status.success) {
          router.push("/organization/users")
        }
      } catch (e) {
        notify().error(e.message)
      }
    }

    const passwordFieldType = ref("password")
    const visibility = ref(false)
    const visibilityIcon = ref("visibility")

    const switchVisibility = () => {
      visibility.value = !visibility.value
      passwordFieldType.value = visibility.value ? "text" : "password"
      visibilityIcon.value = visibility.value ? "visibility_off" : "visibility"
    }

    const passwordFieldTypeRepassword = ref("password")
    const visibilityRepassword = ref(false)
    const visibilityIconRepassword = ref("visibility")

    const switchVisibilityRepassword = () => {
      visibilityRepassword.value = !visibilityRepassword.value
      passwordFieldTypeRepassword.value = visibilityRepassword.value ? "text" : "password"
      visibilityIconRepassword.value = visibilityRepassword.value ? "visibility_off" : "visibility"
    }

    return {
      router,
      ...toRefs(state),
      saveUser,

      passwordFieldType,
      visibility,
      visibilityIcon,
      switchVisibility,

      passwordFieldTypeRepassword,
      visibilityRepassword,
      visibilityIconRepassword,
      switchVisibilityRepassword,

      onReset () {
        state.password = null,
        state.repassword = null
      }
    }
  },
}
</script>

<style>
.q-item.q-router-link--active, .q-item--active {
    color: #57a4ec;
}
</style>
