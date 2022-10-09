<template>
  <q-page q-layout view="hHh lpR fFf">
    <div class="row q-col-gutter-xs">
      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
        <div
          class="props"
        >
          <q-expansion-item
            label="Fields"
            default-opened
            dense
            header-class="text-white text-h6 q-pa-sm bg-blue-6"
            expand-icon=" "
          >
            <div
              v-for="item in getList(1)"
              :key="item.id"
              class="drag-el cursor-pointer bg-grey-6 q-mt-xs"
              draggable="true"
              @dragstart="startDrag($event, item)"
            >
              {{ item.title }}
            </div>
          </q-expansion-item>
        </div>
      </div>

      <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12">
        <div
          class="drop-zone bg-grey-1"
          @drop="onDrop($event, 2)"
          @dragenter.prevent
          @dragover.prevent
        >
          <div
            v-for="item in getInputs()"
            :key="item.id"
            class=""
            @dragstart="startDrag($event, item)"
          >

          <div
            v-if="item.type == 'panel'"
            class="panel bg-grey-1 row"
            @dragenter.prevent
            @dragover.prevent
          >

          </div>

            <q-input v-if="item.type == 'input'" :label="item.label" filled color="secondary"> </q-input>

          </div>
        </div>
      </div>


      <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12">
        <div
          class="props"
        >
        <q-expansion-item
                label="Properties"
                default-opened
                dense
                header-class="text-white text-h6 q-pa-sm bg-blue-6"
                expand-icon=" "
              >
          <q-input color="secondary" dense label="Name" square filled > </q-input>
          <q-input color="secondary" dense label="Label" square filled > </q-input>
          <q-input color="secondary" dense label="Visible" square filled > </q-input>

        </q-expansion-item>

        </div>
      </div>

    </div>

  </q-page>
</template>

<script>
import { defineAsyncComponent, onMounted, ref } from "vue"
import { useQuasar } from 'quasar'

export default {
  name: "Home",
  components: {

  },

  setup() {
    const $q = useQuasar()

    const items = ref([
      { id : 0, title: "Panel", list: 1, type:"panel", label: "Panel" },
      { id : 1, title: "Textbox", list: 1, type:"input", label: "Textbox" },
      { id : 2, title: "Combobox", list: 1, type:"combo", label: "Combo"},
      { id : 3, title: "Datetime", list: 1, type:"datetime", label: "Datetime" },
    ])

    const inputs = ref([

    ])

    const getList = (list) => {
      return items.value.filter((item) => item.list == list)
    }

    const getInputs = () => {
      return inputs.value
    }

    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('item', JSON.stringify(item))
    }

    const onDrop = (event, list) => {
      const dragItem = JSON.parse(event.dataTransfer.getData('item'))
      const item = items.value.find((item) => item.id == dragItem.id)
      inputs.value.push(item)
    }

    onMounted(async () => {

    })


    return {
      getList,
      getInputs,
      startDrag,
      onDrop
    }
  },
}
</script>

<style>
  .props {
    margin: 5px auto;
    background-color: #ecf0f1;
    min-height: 10px;
  }

  .panel {
    padding: 10px;
    min-height: 50px;
    border: 1px solid #aaa;
  }

  .drop-zone {
    margin: 5px auto;
    padding: 10px;
    min-height: 870px;
  }

  .drag-el {
    color: white;
    padding: 5px;
    margin-bottom: 2px;
  }

  .drag-el:nth-last-of-type(1) {
    margin-bottom: 0;
  }
</style>
