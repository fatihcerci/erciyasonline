<template>
  <div class="row q-col-gutter-sm q-pl-md q-pr-sm q-pa-sm">
    <div class="col-12">
      <q-card class="no-shadow">
        <q-table
          card-class=""
          :hide-header="mode"
          :grid="mode"
          :filter="filter"
          :rows="rows ? rows : []"
          :columns="columns"
          :pagination-label="getPaginationLabel"
          :rows-per-page-options="[25, 50, 75, 100]"
          row-key="oid"
          table-class=""
          color="primary"
          table-header-class="text-bold"
          rows-per-page-label="Satır Sayısı"
          no-data-label="Kayıt bulunamadı"
          no-results-label="Eşleşen kayıt bulunamadı"
          title="Kullanıcı Tanımları"
          title-class="text-bold"
        >

          <template v-slot:top-right="props">

            <q-btn color="primary" unelevated label="Yeni Ekle" glossy @click="editUser(null)" class="q-mr-sm" />

            <q-input
              standout
              dense
              debounce="300"
              v-model="filter"
              placeholder="Hızlı Ara"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>

            <q-btn
              flat
              dense
              :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="props.toggleFullscreen"
              v-if="!mode"
              v-close-popup="!$q.platform.is.mobile"
            >
              <q-tooltip :disable="$q.platform.is.mobile"
                >{{ props.inFullscreen ? "Tam Ekrandan Çık" : "Tam Ekran" }}
              </q-tooltip>
            </q-btn>
          </template>

          <template v-slot:body-cell-avatar="props">
            <q-td :props="props">
              <q-avatar>
                <img
                  :src="props.row.avatar ? props.row.avatar : 'https://cdn.quasar.dev/img/boy-avatar.png'"
                />
              </q-avatar>
            </q-td>
          </template>

          <template v-slot:body-cell-status="props">
            <q-td :props="props">
              <q-toggle
                color=""
                v-bind:model-value="props.row.status == 1 ? true : false"
                @click="updateStatus(props.row)"
              />
            </q-td>

          </template>

          <template v-slot:body-cell-islemler="props">
            <q-td :props="props">
              <q-btn
                size="sm"
                color="primary"
                label="Güncelle"
                glossy
                @click="editUser(props.row)"
              >
              </q-btn>

              <q-btn
                size="sm"
                color="primary"
                label="Şifre Güncelle"
                glossy
                class="q-ml-sm"
                @click="updatePassword(props.row)"
              >
              </q-btn>

            </q-td>
          </template>


      </q-table>
      </q-card>
    </div>
  </div>



</template>

<script>
import { defineAsyncComponent, onMounted, ref, computed, toRefs, reactive, watch } from "vue"
import { exportFile, useQuasar } from "quasar"
import { useRouter } from "vue-router"
import apiService from "../../services/apiService"
import userController from "../../controllers/userController"
import notify from "../../helpers/notification"

const columns = [
  {
    name: "avatar",
    label: "",
    field: "avatar",
    align: "center",
    style: "width: 80px",
    required : true
  },
  {
    name: "tckn",
    label: "T.C Kimlik No",
    field: "tckn",
    align: "left",
    headerStyle: 'font-size:16px',
    required : true
  },
  {
    name: "name",
    label: "Adı",
    field: "name",
    align: "left",
    headerStyle: 'font-size:16px',
    required : true
  },
  {
    name: "surname",
    label: "Soyadı",
    field: "surname",
    align: "left",
    headerStyle: 'font-size:16px;',
    required : true
  },
  {
    name: "title",
    label: "Ünvan",
    field: "title",
    align: "left",
    headerStyle: 'font-size:16px',
    required : true
  },
  {
    name: "birthdate",
    label: "Doğum Tarihi",
    field: "birthdate",
    align: "left",
    headerStyle: 'font-size:16px',
    required : true
  },
  {
    name: "phone",
    label: "Telefon",
    field: "phone",
    align: "left",
    headerStyle: 'font-size:16px',
    required : true
  },
  {
    name: "email",
    label: "E-Posta",
    field: "email",
    align: "left",
    headerStyle: 'font-size:16px',
    required : true
  },
  {
    name: "status",
    label: "Durum",
    field: "status",
    align: "left",
    headerStyle: 'font-size:16px',
    required : true
  },
  {
    name: "islemler",
    label: "",
    field: "islemler",
    align: "left",
    headerStyle: 'font-size:16px',
    style: "width: 50px",
  },
]

export default {
  name: "TableUsers",
  components: {

  },
  setup(props, { emit }) {
    const { dataList, claimDataSource, displayError, displayMessages, fetch } = apiService()

    const { selectedUser, userList, groupOptions, roleOptions } = userController()

    const router = useRouter()
    const $q = useQuasar()
    let filter = ref("")
    let mode = computed(() => {
      return false
    })

    const state = reactive({

    })

/*
    const rows = computed(() => {
      return [{avatar:"https://cdn.quasar.dev/img/boy-avatar.png", adi:"Admin", soyadi:"Kullanicisi", unvan:"ADMIN", gsm:"0507 216 58 24", eposta:"fatihcerci001@gmail.com", status:"1"}]
    })
    */

    const rows = computed(() => {
      return userList.value && userList.value && userList.value.length > 0
        ? userList.value.map((item) => ({
            ...item,
          }))
        : []
    })

    onMounted(async () => {
      try {
        const bodyData = {

        }
        await fetch("users/get_all", bodyData, true)
        userList.value = dataList.value.data
      } catch (e) {
      }
    })


    const getPaginationLabel = (
      firstRowIndex,
      endRowIndex,
      totalRowsNumber
    ) => {
      return firstRowIndex + " - " + endRowIndex + " / " + totalRowsNumber
    }

    const wrapCsvValue = (val, formatFn) => {
      let formatted = formatFn !== void 0 ? formatFn(val) : val
      formatted =
        formatted === void 0 || formatted === null ? "" : String(formatted)
      formatted = formatted.split('"').join('""')
      return `"${formatted}"`
    }

    const exportTable = () => {
      // naive encoding to csv format
      const content = [columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          claimDataSource.value.map((row) =>
            columns
              .map((col) =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n")
      const status = exportFile("claims.csv", content, "text/csv")
      if (status !== true) {
        notify().error("Tarayıcınız dosya indirmeyi engelledi")
      }
    }

    const editUser = async (row) => {
      await getGroups()
      await getRoles()
      selectedUser.value = row
      router.push("/organization/users/view")
    }

    const updatePassword = async (row) => {
      selectedUser.value = row
      router.push("/organization/users/updatePassword")
    }


    const getGroups = async () => {
      try {
        await fetch("groups/get_all", {}, true)
        let optList = dataList.value.data.map((item) => ({...item}))
        if(groupOptions.length != optList.length) {
          optList.forEach(element => {
            groupOptions.push({value:element.id, label:element.name})
          })
        }
      } catch (e) {
      }
    }

    const getRoles = async () => {
      try {
        await fetch("roles/get_all", {}, true)
        let optList = dataList.value.data.map((item) => ({...item}))
        if(roleOptions.length != optList.length) {
          optList.forEach(element => {
            roleOptions.push({value:element.id, label:element.name})
          })
        }
      } catch (e) {
      }
    }

    const updateStatus = (row) => {
      const data = userList.value.find((item) => item.id === row.id)
      if(data.status == 0) {
        data.status = 1
      } else {
        data.status = 0
      }

      const bodyData = {
        id : row.id,
        status : data.status
      }
      fetch("users/activate_passivate", bodyData, true)
    }


    return {
      router,
      getPaginationLabel,
      columns,
      rows,
      dataList,
      claimDataSource,
      displayError,
      displayMessages,
      filter,
      mode,
      ...toRefs(state),
      wrapCsvValue,
      exportTable,
      fetch,
      editUser,
      updatePassword,
      updateStatus
    }
  },
}
</script>

<style lang="scss" scoped>


</style>
