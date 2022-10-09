<template>

  <div class="row q-pa-sm">
    <div class="col-12">
      <q-card flat class="bg-grey-2">
        <q-card-section>
          <div class="text-h6">Grup Ekle / Düzenle</div>
        </q-card-section>


        <q-card-section class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            label="Adı"
            :rules="[val => !!val || 'Zorunlu alan']"
          />
          <q-input
            filled
            v-model="description"
            label="Açıklama"
            :rules="[val => !!val || 'Zorunlu alan']"
            />
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
          <q-input
            filled
            v-model="address"
            label="Adres"
            :rules="[val => !!val || 'Zorunlu alan']"
          />

          <div>
            <q-btn label="Kaydet" color="primary" @click="saveGroup()"/>
            <q-btn label="Temizle" color="primary" @click="onReset" class="q-ml-sm" />
          </div>

        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted, ref, toRefs, reactive } from "vue"
import { useQuasar } from 'quasar'
import { useRouter } from "vue-router"
import apiService from "../../services/apiService"
import groupController from "../../controllers/groupController"

export default {
  name: "GroupView",
  components: {

  },

  setup() {

    const { fetch, dataList } = apiService()

    const { selectedGroup } = groupController()

    const state = reactive({
      id : selectedGroup.value ? selectedGroup.value.id : null,
      status : selectedGroup.value ? selectedGroup.value.status : null,
      name : selectedGroup.value ? selectedGroup.value.name : null,
      description : selectedGroup.value ? selectedGroup.value.description : null,
      phone : selectedGroup.value ? selectedGroup.value.phone : null,
      email : selectedGroup.value ? selectedGroup.value.email : null,
      address : selectedGroup.value ? selectedGroup.value.address : null
    })

    const router = useRouter()

    onMounted(async () => {
    })

    const saveGroup = async () => {
      try {
        await fetch("groups/create_update", state, true)
        if(dataList.value.status.success) {
          router.push("/organization/groups")
        }
      } catch (e) {
      }
    }


    return {
      router,
      ...toRefs(state),
      saveGroup,
      onReset () {
        state.name = null,
        state.description = null,
        state.phone = null,
        state.email = null
        state.address = null
      }
    }
  },
}
</script>

<style>

</style>
