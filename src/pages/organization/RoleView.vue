<template>
  <div class="row q-pa-sm">
    <div class="col-12">
      <q-card flat class="bg-grey-2">
        <q-card-section>
          <div class="text-h6">Rol Ekle / Düzenle</div>
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
          <div>
            <q-btn label="Kaydet" color="primary" @click="saveRole()"/>
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
import roleController from "../../controllers/roleController"

export default {
  name: "RoleView",
  components: {

  },

  setup() {

    const { fetch, dataList } = apiService()

    const { selectedRole } = roleController()

    const state = reactive({
      id : selectedRole.value ? selectedRole.value.id : null,
      status : selectedRole.value ? selectedRole.value.status : null,
      name : selectedRole.value ? selectedRole.value.name : null,
      description : selectedRole.value ? selectedRole.value.description : null,
    })

    const router = useRouter()

    onMounted(async () => {
    })

    const saveRole = async () => {
      try {
        await fetch("roles/create_update", state, true)
        if(dataList.value.status.success) {
          router.push("/organization/roles")
        }
      } catch (e) {
      }
    }


    return {
      router,
      ...toRefs(state),
      saveRole,
      onReset () {
        state.name = null,
        state.description = null
      }
    }
  },
}
</script>

<style>

</style>
