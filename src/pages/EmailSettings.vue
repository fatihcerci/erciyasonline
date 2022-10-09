<template>

  <div class="row q-pa-sm q-pl-md">
    <div class="col-12">
      <q-card flat class="">
        <q-card-section>
          <div class="text-h6">E-Posta Ayarları</div>
        </q-card-section>

        <q-card-section class="q-gutter-md">
          <q-input
            filled
            v-model="protocol"
            label="Protokol"
          />
          <q-input
            filled
            v-model="server"
            label="E-Posta Sunucusu"
            />
          <q-input
            filled
            v-model="port"
            label="Port"
          />
          <q-input
            filled
            v-model="account"
            label="E-Posta Adresi"
          />
          <q-input
            filled
            type="password"
            v-model="password"
            label="E-Posta Adresine ait Şifre"
          />
          <q-input
            filled
            v-model="from"
            label="Kimden (From)"
          />
          <q-input
            filled
            v-model="to"
            label="Kime (To)"
          />
          <q-input
            filled
            v-model="title"
            label="Başlık"
          />

          <div>
            <q-btn label="Kaydet" color="primary" @click="save()"/>
            <q-btn label="Temizle" color="primary" @click="onReset" class="q-ml-sm" />

          </div>

        </q-card-section>

        <q-card-section class="q-gutter-md">
          <q-input
            filled
            v-model="test_mail"
            label="Test Mail Adresi"
          />
          <q-btn label="Test Maili Gönder" color="primary" @click="sendTestMail()"/>
        </q-card-section>

      </q-card>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted, ref, toRefs, reactive, computed, watch } from "vue"
import { useQuasar } from 'quasar'
import { useRouter } from "vue-router"
import apiService from "../services/apiService"

export default {
  name: "EmailSettings",
  components: {

  },

  setup() {

    const { fetch, dataList } = apiService()

    onMounted(async () => {
      try {
        const bodyData = {

        }
        await fetch("emailsettings/get", bodyData, true)
        setValue(dataList.value.data)
        //roleList.value = dataList.value.data
      } catch (e) {
      }
    })

    const state = reactive({
      id : null,
      protocol : null,
      server : null,
      port : null,
      account : null,
      password : null,
      from : null,
      to : null,
      title : null,
      test_mail : null
    })

    const setValue = (emailsettings) => {
      if(emailsettings) {
        state.id = emailsettings.id
        state.protocol = emailsettings.protocol
        state.server = emailsettings.server
        state.port = emailsettings.port
        state.account = emailsettings.account
        state.password = emailsettings.password
        state.from = emailsettings.from
        state.to = emailsettings.to
        state.title = emailsettings.title
      }
    }


    const router = useRouter()

    onMounted(async () => {
    })

    const save = async () => {
      try {
        await fetch("emailsettings/create_update", state, true)
      } catch (e) {
      }
    }

    const sendTestMail = async () => {
      try {
        let bodyData = {
          test_mail : "fatihcerci001@gmail.com"
        }
        await fetch("emailsettings/send_test_mail", state, true)
      } catch (e) {
      }
    }


    return {
      router,
      ...toRefs(state),
      setValue,
      save,
      sendTestMail,
      onReset () {
        state.protocol = null,
        state.server = null,
        state.port = null,
        state.account = null,
        state.password = null,
        state.from = null,
        state.to = null,
        state.title = null
      }
    }
  },
}
</script>

<style>

</style>
