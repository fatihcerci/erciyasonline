<template>
  <q-page q-layout view="hHh lpR fFf">

    <table-users />

  </q-page>
</template>

<script>
import { defineAsyncComponent, onMounted, ref, toRefs, reactive } from "vue"
import { useQuasar } from 'quasar'
import { useRouter } from "vue-router"
import apiService from "../../services/apiService"

export default {
  name: "Users",
  components: {
    TableUsers: defineAsyncComponent(() =>
      import("src/components/tables/TableUsers.vue")
    )
  },

  setup() {

    const { fetch, dataList } = apiService()

    const router = useRouter()

    const state = reactive({
    })

    onMounted(async () => {

    })


    return {
      router,
      ...toRefs(state),
    }
  },
}
</script>

<style>

</style>
