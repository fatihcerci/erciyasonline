<template>
  <div class="row q-col-gutter-sm q-pa-sm q-pl-md">
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
          title="Grup Tanımları"
          title-class="text-bold"
        >

          <template v-slot:top-right="props">

            <q-btn color="primary" unelevated label="Yeni Ekle" @click="editGroup(null)" class="q-mr-sm" />

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
                @click="editGroup(props.row)"
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
import { exportFile, useQuasar, date } from "quasar"
import { useRouter } from "vue-router"
import apiService from "../../services/apiService"
import notify from "../../helpers/notification"
import groupController from "src/controllers/groupController"

const columns = [
  {
    name: "created_time",
    label: "Oluşturulma Zamanı",
    field: "created_time",
    align: "left",
    headerStyle: 'font-size:16px',
    required : true,
    format: val => date.formatDate(val, 'DD/MM/YYYY HH:mm:ss')
  },
  {
    name: "last_updated",
    label: "Güncellenme Zamanı",
    field: "last_updated",
    align: "left",
    headerStyle: 'font-size:16px',
    required : true,
    format: val => date.formatDate(val, 'DD/MM/YYYY HH:mm:ss')
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
    name: "description",
    label: "Açıklama",
    field: "description",
    align: "left",
    headerStyle: 'font-size:16px;',
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
    name: "address",
    label: "Adres",
    field: "address",
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
  name: "TableGroups",
  components: {

  },
  setup(props, { emit }) {
    const { dataList, displayError, displayMessages, fetch } =
      apiService()

    const { selectedGroup, groupList } = groupController()

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
      return groupList.value && groupList.value && groupList.value.length > 0
        ? groupList.value.map((item) => ({
            ...item,
          }))
        : []
    })

    onMounted(async () => {
      try {
        const bodyData = {

        }
        await fetch("groups/get_all", bodyData, true)
        groupList.value = dataList.value.data
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

    const editGroup = (row) => {
      selectedGroup.value = row
      router.push("/organization/groups/view")
    }

    const updateStatus = (row) => {
      const data = groupList.value.find((item) => item.id === row.id)
      if(data.status == 0) {
        data.status = 1
      } else {
        data.status = 0
      }

      const bodyData = {
        id : row.id,
        status : data.status
      }
      fetch("groups/activate_passivate", bodyData, true)
    }


    return {
      router,
      getPaginationLabel,
      columns,
      rows,
      dataList,
      displayError,
      displayMessages,
      filter,
      mode,
      ...toRefs(state),
      wrapCsvValue,
      exportTable,
      fetch,
      editGroup,
      updateStatus
    }
  },
}
</script>

<style lang="scss" scoped>


</style>
