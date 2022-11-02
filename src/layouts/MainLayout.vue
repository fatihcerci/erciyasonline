<template>
  
    <q-layout view="hHh lpR fFf">

      <q-header elevated class="q-pa-md bg-primary text-white " height-hint="98" style="background-color: transparent;">

        
        <q-tabs align="center" class="q-mr-md">
          <img src="~/assets//logobeyaz.png" style="width:250px;" class="q-pl-xl" />
          <q-space />
          <q-route-tab to="/" label="Ana Sayfa "/>
          <q-route-tab to="/howtowork" label="Nasıl Çalışır?" />
          <q-route-tab to="/faquestions" label="Sık Sorulan Sorular" />
          <q-route-tab to="/about" label="Hakkımızda" />
          <q-route-tab to="/blog" label="Blog" />
          <q-route-tab to="/contact" label="İletişim" class="q-mr-xl" />
          <q-space />
        </q-tabs>


      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  
</template>

<script>
import { onMounted, ref, computed, toRefs, reactive } from "vue"
import { QPageSticky, useQuasar } from 'quasar'
import { useRouter } from "vue-router"

import menuController from "../controllers/menuController"

import userService from "../services/userService"
import Language from "src/components/Language.vue"
import apiService from 'src/services/apiService'

const searchResults = [
  {
    label: 'Fatih Çerçi',
    value: '1',
    phone: '0(507) 216 58 24',
    email: 'fatihcerci001@gmail.com',
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg'
  },
  {
    label: 'Meryem Çerçi',
    value: '2',
    phone: '0(507) 916 91 76',
    email: 'melike.sbp@gmail.com',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'
  },
]

export default {
  name: "MainLayout",
  components: {
    //Language
  },
  computed: {
    crumbs: function () {
      this.setMenu(this.$route.meta.menu)

      let pathArray = this.$route.path.split("/")

      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        if (!this.$route.matched[idx]) {
          return breadcrumbArray
        }

        if (this.$route.matched[idx].meta && this.$route.matched[idx].meta.parent) {
          let breadCrumbObj = {
            path: this.$route.matched[idx].meta.parent.path,
            to: this.$route.matched[idx].meta.parent.path,
            text: this.$route.matched[idx] ? (this.$route.matched[idx].meta.parent.breadCrumb || path) : (this.$route.matched[idx - 1].meta.parent.breadCrumb || path),
            icon: this.$route.matched[idx] ? this.$route.matched[idx].meta.parent.icon : this.$route.matched[idx - 1].meta.parent.icon,
          }
          breadcrumbArray.push(breadCrumbObj)

          breadCrumbObj = {
            path: this.$route.matched[idx].path,
            to: this.$route.matched[idx].path,
            text: this.$route.matched[idx].meta.breadCrumb,
            icon: this.$route.matched[idx].meta.icon
          }

          if (breadCrumbObj.to.includes("//")) {
            breadCrumbObj.to = breadCrumbObj.to.substring(1, breadCrumbObj.to.length)
          }
          breadcrumbArray.push(breadCrumbObj)

        } else {
          let breadCrumbObj = {
            path: path,
            to: breadcrumbArray[idx - 1]
              ? breadcrumbArray[idx - 1].to + "/" + path
              : "/" + path,
            text: this.$route.matched[idx] ? (this.$route.matched[idx].meta.breadCrumb || path) : (this.$route.matched[idx - 1].meta.breadCrumb || path),
            icon: this.$route.matched[idx] ? this.$route.matched[idx].meta.icon : this.$route.matched[idx - 1].meta.icon,
          }

          if (breadCrumbObj.to.includes("//")) {
            breadCrumbObj.to = breadCrumbObj.to.substring(1, breadCrumbObj.to.length)
          }
          breadcrumbArray.push(breadCrumbObj)
        }

        return breadcrumbArray
      }, [])
      return breadcrumbs
    }

  },

  setup() {
    const $q = useQuasar()

    const router = useRouter()

    const expanded = router.currentRoute.value.path.includes('organization') ? ref(true) : ref(false)

    const leftDrawerOpen = ref(false)
    const searchBoxOpen = ref(false)

    const state = reactive({
      search: ''
    })

    const searchResult = ref(searchResults)

    const { menu, getMenu, setMenu } = menuController()
    const { getUser } = userService()
    const { fetch } = apiService()


    const test = (val) => {
      alert("OID:" + val)
    }


    onMounted(async () => {
      if (!localStorage.getItem("sessionInfo")) {
        router.push("/login")
      }
    })

    return {
      ...toRefs(state),
      router,
      expanded,
      getMenu,
      setMenu,
      getUser,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      searchBoxOpen,
      toggleSearchBox() {
        state.search = ''
        searchBoxOpen.value = !searchBoxOpen.value
      },
      searchResult,
      filterFn(val, update, abort) {
        if (val.length < 2) {
          abort()
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          searchResult.value = searchResults.filter(v => v.label.toLowerCase().indexOf(needle) > -1)
        })
      },
      test,
      logout: async () => {
        await fetch("userop/logout", { id: getUser().id }, true)
        localStorage.removeItem('sessionInfo')
        localStorage.removeItem('token')
        router.push('/login')
      },

    }
  },
}
</script>

<style lang="css">
.q-item__section--avatar {
  min-width: 0px !important;
}

.user-menu {
  -webkit-box-shadow: 0 5px 25px rgb(34 41 47 / 10%) !important;
  box-shadow: -1 5px 25pxrgba(34, 41, 47, .1) !important;
  border: 1px solid rgba(34, 41, 47, .1);
}

.q-badge--floating {
  top: 1px !important;
  right: -2px !important;
}

.user-menu .q-hoverable:hover {
  color: #6610f2 !important;
}

.user-menu .q-hoverable:hover>.q-focus-helper {
  background-color: #6610f2 !important;
}

.menu-active {
  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, .7)) !important;
  color: white !important;
  -webkit-box-shadow: 0 0 10px 1px rgb(115 103 240 / 70%) !important;
  box-shadow: 0 0 10px 1px rgba(115, 103, 240, .7) !important;
  border-radius: 4px !important;
}

.language .q-select__dropdown-icon {
  display: none !important;
}

.q-field--standard .q-field__control:before {
  border-bottom: none;
}

.q-toolbar .q-select__dropdown-icon {
  display: none;
}

.q-menu.q-position-engine {
  background: #f5f5f5 !important;
  color: #5e5873 !important;
  font-weight: 600 !important;
  box-shadow: none !important;
}

.jumbotron {
position: relative;
background:center center;
background-size: cover;
width: 100%;
min-height: 550px;
overflow: hidden;
}

</style>
