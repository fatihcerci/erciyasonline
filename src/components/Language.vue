<template>
  <q-select class="language" borderless v-model="language" :options="options" :options-html="true" @update:model-value="changeLanguage()">
    <template v-slot:selected>
      <q-chip
        v-if="language"
        dense
        color="transparent"
        text-color="primary"
        class="q-my-none q-ml-xs q-mr-none"
      >
        <q-icon size="sm" class="q-mr-sm">
          <img :src="getIcon" />
        </q-icon>

        {{ language.labelStr }}


      </q-chip>

    </template>
  </q-select>

</template>

<script>
import { onMounted, ref, watch, computed } from "vue"
import { useQuasar } from "quasar"
import { useRouter } from "vue-router"
import { useI18n } from 'vue-i18n'

export default {
  name: "Language",
  components: {

  },
  setup(props, { emit }) {
    const $q = useQuasar()
    const router = useRouter()

    const { locale } = useI18n({ useScope: 'global' })

    const language = localStorage.getItem("language") ? ref(JSON.parse(localStorage.getItem("language"))) : ref({
      value: "tr",
      label: "<img width='20px' src='flags/tr.svg' /> Türkçe",
      labelStr: "Türkçe",

      iconSrc: 'flags/tr.svg'
    })

    localStorage.removeItem("language")
    localStorage.setItem("language", JSON.stringify(language.value))

    const options = [
      {
        value : "tr",
        label: "<img width='20px' src='flags/tr.svg' /> Türkçe",
        labelStr: "Türkçe",
        iconSrc: 'flags/tr.svg'
      },
      {
        value : "az",
        label: "<img width='20px' src='flags/az.svg' /> Azərbaycanca",
        labelStr: "Azərbaycanca",
        iconSrc: 'flags/az.svg'
      },
      {
        value : "en",
        label: "<img width='20px' src='flags/us.svg' /> English",
        labelStr: "English",
        iconSrc: 'flags/us.svg'
      },
    ]

    const getIcon = computed(() => {
      return language.value.iconSrc
    })

    const changeLanguage = () => {
      localStorage.removeItem("language")
      localStorage.setItem("language", JSON.stringify(language.value))

      locale.value = language.value.value
    }

    onMounted(async () => {
      locale.value = language.value.value
    })

    return {
      language,
      locale,
      options,
      getIcon,
      changeLanguage
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
