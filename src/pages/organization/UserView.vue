<template>
  <div class="row q-pa-sm">
    <div class="col-12">
      <q-card flat class="bg-grey-2">
        <q-card-section>
          <div class="text-h6">Kullanıcı Ekle / Düzenle</div>
        </q-card-section>


        <div class="row q-pb-md q-col-gutter-md">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-card-section class="q-gutter-md">
              <q-input
                filled
                v-model="tckn"
                label="T.C Kimlik No"
                mask="###########"
                :rules="[val => !!val || 'Zorunlu alan']"
              />

              <q-input
                filled
                v-model="name"
                label="Adı"
                :rules="[val => !!val || 'Zorunlu alan']"
              />

              <q-input
                filled
                v-model="surname"
                label="Soyadı"
                :rules="[val => !!val || 'Zorunlu alan']"
              />

              <q-input
                filled
                v-model="title"
                label="Unvan"
                :rules="[val => !!val || 'Zorunlu alan']"
              />

              <q-input filled v-model="birthdate" mask="##/##/####"  label="Doğum Tarihi" :rules="[val => !!val || 'Zorunlu alan']">
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="birthdate" mask="DD/MM/YYYY">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </q-card-section>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <q-card-section class="q-gutter-md">
              <q-input
                filled
                v-model="phone"
                label="Telefon"
                mask="0(###) ### ####"
                :rules="[val => !!val || 'Zorunlu alan']"
              />

              <q-input
                filled
                v-model="email"
                label="Eposta"
                :rules="[val => !!val || 'Zorunlu alan']"
              />

              <q-select
                filled
                v-model="group_id"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="groupOpts"
                @filter="filterGroup"
                label="Bağlı Olduğu Grup"
                :rules="[val => !!val || 'Zorunlu alan']"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      Kayıt bulunamadı
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

              <q-select
                filled
                v-model="role_id"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                :options="roleOpts"
                @filter="filterRole"
                label="Rolü"
                :rules="[val => !!val || 'Zorunlu alan']"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      Kayıt bulunamadı
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

              <div>
                <q-btn label="Kaydet" color="primary" @click="saveUser()"/>
                <q-btn label="Temizle" color="primary" @click="onReset" class="q-ml-sm" />
              </div>

            </q-card-section>
          </div>
        </div>
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

export default {
  name: "UserView",
  components: {

  },

  setup() {

    const { fetch, dataList } = apiService()

    const { selectedUser, groupOptions, roleOptions } = userController()

    const groupOpts = ref(null)
    const roleOpts = ref(null)

    const state = reactive({
      id : selectedUser.value ? selectedUser.value.id : null,
      status : selectedUser.value ? selectedUser.value.status : null,
      tckn : selectedUser.value ? selectedUser.value.tckn : null,
      name : selectedUser.value ? selectedUser.value.name : null,
      surname : selectedUser.value ? selectedUser.value.surname : null,
      title : selectedUser.value ? selectedUser.value.title : null,
      birthdate : selectedUser.value ? selectedUser.value.birthdate : null,
      phone : selectedUser.value ? selectedUser.value.phone : null,
      email : selectedUser.value ? selectedUser.value.email : null,
      group_id : selectedUser.value ? groupOptions.filter((item) => item.value.indexOf(selectedUser.value.group_id) > -1)[0] : null,
      role_id : selectedUser.value ? roleOptions.filter((item) => item.value.indexOf(selectedUser.value.role_id) > -1)[0] : null,
    })

    const router = useRouter()

    onMounted(async () => {
      try {
        const bodyData = {
          username : "fatih_cerci",
          password : "123456"
        }
        //await fetch("test_method", bodyData, true)
      } catch (e) {
      }
    })

    const saveUser = async () => {
      try {
        var bodyData = {
          id : state.id,
          tckn : state.tckn,
          name : state.name,
          surname : state.surname,
          title : state.title,
          birthdate : state.birthdate,
          phone : state.phone,
          email : state.email,
          group_id : state.group_id.value,
          role_id : state.role_id.value
        }

        await fetch("users/create_update", bodyData, true)
        if(dataList.value.status.success) {
          router.push("/organization/users")
        }
      } catch (e) {
      }
    }

    return {
      router,
      ...toRefs(state),
      saveUser,
      onReset () {
        state.tckn = null,
        state.name = null,
        state.surname = null,
        state.title = null,
        state.birthdate = null,
        state.phone = null,
        state.email = null
      },
      groupOpts,
      roleOpts,

      filterGroup (val, update, abort) {
        update(() => {
          const needle = val.toLowerCase()
          groupOpts.value = groupOptions.filter((item) => item.label.toLowerCase().indexOf(needle) > -1)
        })
      },
      filterRole (val, update, abort) {
        update(() => {
          const needle = val.toLowerCase()
          roleOpts.value = roleOptions.filter((item) => item.label.toLowerCase().indexOf(needle) > -1)
        })
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
