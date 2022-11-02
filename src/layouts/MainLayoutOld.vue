<template>
  <q-layout view="hHh lpR fFf">

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" style="background: #283046 !important;">

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg">
          </q-avatar>
        </q-item-section>
        <q-item-section style="color:rgb(203 200 229) !important; font-weight: 600; font-size: 1.45rem;">ERCİYAS</q-item-section>
      </q-item>

      <q-list class="rounded-borders text-white q-pl-sm q-pr-sm">

        <q-item
          clickable
          @click="router.push('/')"
          :active="getMenu().includes('home')"
          active-class="menu-active"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>Ana Sayfa</q-item-section>
        </q-item>

        <q-item
          clickable
          @click="router.push('/emailsettings')"
          :active="getMenu().includes('emailsettings')"
          active-class="menu-active"
        >
          <q-item-section avatar>
            <q-icon name="mail" />
          </q-item-section>

          <q-item-section>E-posta Ayarları</q-item-section>
        </q-item>

        <q-expansion-item v-model="expanded" :content-inset-level="0.5" expand-separator icon="corporate_fare" label="Organizasyon Tanımları" >

          <q-item
            clickable
            @click="router.push('/organization/groups')"
            :active="getMenu().includes('groups')"
            active-class="menu-active"

          >
            <q-item-section avatar>
              <q-icon name="groups" />
            </q-item-section>

            <q-item-section>Grup Tanımları</q-item-section>
          </q-item>

          <q-item
            clickable
            @click="router.push('/organization/roles')"
            :active="getMenu().includes('roles')"
            active-class="menu-active"

          >
            <q-item-section avatar>
              <q-icon name="manage_accounts" />
            </q-item-section>

            <q-item-section>Rol Tanımları</q-item-section>
          </q-item>

          <q-item
            clickable
            @click="router.push('/organization/users')"
            :active="getMenu().includes('users')"
            active-class="menu-active"
          >
            <q-item-section avatar>
              <q-icon name="person_add" />
            </q-item-section>

            <q-item-section>Kullanıcı Tanımları</q-item-section>
          </q-item>

        </q-expansion-item>

      </q-list>
    </q-drawer>



    <q-page-container class="q-pt-md bg-grey-2">
      <!--
      <div class="q-pa-sm" v-if="$q.screen.gt.sm">
          <q-toolbar class="bg-grey-8 text-white font-12 shadow-1 rounded-borders">
            <q-breadcrumbs active-color="white">
              <q-breadcrumbs-el label="Ana Sayfa" icon="home" to="/" />
              <q-breadcrumbs-el label="Organizasyon Tanımları" icon="corporate_fare" />
              <q-breadcrumbs-el label="Kullanıcı Tanımları" icon="person_add" />
            </q-breadcrumbs>
          </q-toolbar>
      </div>
      -->

      <div class="q-pl-md q-pr-md">
        <q-toolbar class="bg-white text-grey-8 font-13 rounded-borders shadow-25" v-if="!searchBoxOpen">
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" v-if="!$q.screen.gt.sm" />
          <q-breadcrumbs active-color="" v-if="$q.screen.gt.sm">
            <q-breadcrumbs-el v-for="item in crumbs" :key="item.text" :label="item.text" :icon="item.icon" :to="item.to" />
          </q-breadcrumbs>

          <q-space />

          <!--
          <q-select class="language" borderless v-model="language" :options="options" :options-html="true">
            <template v-slot:selected>
              <q-chip
                v-if="language && $q.screen.gt.sm"
                dense
                square
                color="white"
                text-color="primary"
                class="q-my-none q-ml-xs q-mr-none"
              >
                <q-icon size="sm" class="q-mr-sm">
                  <img :src="getIcon" />
                </q-icon>

                {{ language.labelStr }}


              </q-chip>

              <q-chip
                v-if="language && !$q.screen.gt.sm"
                dense
                square
                color="white"
                text-color="primary"
                class="q-my-none q-ml-xs q-mr-none"
              >
                <q-icon size="sm" class="q-mr-sm">
                  <img :src="getIcon" />
                </q-icon>

              </q-chip>
            </template>
          </q-select>
          -->

          <q-btn flat round size="md" icon="search" @click="toggleSearchBox" class="v-step-4" />

          <q-btn flat round size="md" icon="notifications">
            <q-badge color="red" class="" rounded floating>5</q-badge>
          </q-btn>

          <q-item class="cursor-pointer v-step-0">
            <q-item-section>
              <q-item-label v-if="$q.screen.gt.sm" class="font-14 text-bold">{{ getUser().title }}</q-item-label>
            </q-item-section>
            <q-item-section side >
              <q-avatar size="48px">
                <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
              </q-avatar>
            </q-item-section>

            <q-menu fit flat :offset="[40, 2]" class="user-menu no-shadow text-grey-7">
              <q-item>
                <q-item-section>
                  <language />
                </q-item-section>
              </q-item>

              <q-separator />


              <q-item clickable>
                <q-item-section avatar>
                  <q-icon name="person" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Profil</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Gelen Kutusu</q-item-label>
                </q-item-section>
              </q-item>


              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="task_alt" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Yapılacaklar</q-item-label>
                </q-item-section>
              </q-item>


              <q-separator />

              <q-item clickable v-ripple @click="logout">
                <q-item-section avatar>
                  <q-icon name="logout" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Çıkış Yap</q-item-label>
                </q-item-section>
              </q-item>


            </q-menu>

          </q-item>
        </q-toolbar>

        <q-toolbar class="bg-white text-grey-8 font-13 rounded-borders shadow-25 q-pa-xs" v-if="searchBoxOpen">
          <q-select
            flat
            borderless
            v-model="search"
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            :options="searchResult"
            @filter="filterFn"
            placeholder="Ara"
            style="background: white !important"
            class="full-width q-pl-sm"
            autofocus
            :menu-offset="[10, 5]"
            v-on:blur="toggleSearchBox"
          >
            <template v-slot:prepend >
              <q-icon name="search" />
            </template>

            <template v-slot:append >
              <q-btn flat round size="sm" icon="close" @click="toggleSearchBox" />
            </template>

            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  Sonuç bulunamadı
                </q-item-section>
              </q-item>
            </template>

            <template v-slot:option="scope">

              <q-item v-bind="scope.itemProps" @click="test(scope.opt.value)">
                <q-item-section avatar>
                  <q-icon :name="scope.opt.icon" style="display:none;" />
                  <q-avatar size="48px">
                    <img :src="scope.opt.avatar" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                  <q-item-label caption>{{ scope.opt.phone }}</q-item-label>
                </q-item-section>

                <!--
                <q-tooltip transition-show="scale" transition-hide="scale" self="bottom center" :offset="[-500,-50]">
                  <q-card>
                    <q-card-section class="row justify-center items-center">
                      <q-avatar size="60px" class="justify-center items-center">
                        <img :src="scope.opt.avatar" />
                      </q-avatar>

                      <q-item class="col-md-12 cursor-pointer q-pa-none">
                        <q-item-section>
                          <q-item-label class="font-16 text-grey-8 text-bold text-center">{{ scope.opt.label }}</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item class="col-md-12 cursor-pointer q-pa-none">
                        <q-item-section>
                          <q-item-label class="font-13 text-grey-6 text-bold text-center">{{ scope.opt.phone }}</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item class="col-md-12 cursor-pointer q-pa-none">
                        <q-item-section>
                          <q-item-label class="font-13 text-grey-6 text-bold text-center">{{ scope.opt.email }}</q-item-label>
                        </q-item-section>
                      </q-item>

                    </q-card-section>

                  </q-card>
                </q-tooltip>
                -->
              </q-item>
            </template>



          </q-select>

          <!--
            <q-input
              flat
              color="white"
              v-model="search"
              type="input"
              placeholder="Ara"
              class="full-width"
              style="background: white"
              autofocus
              v-on:blur="toggleSearchBox"
            >
              <template v-slot:prepend >
                <q-icon name="search" />
              </template>

              <template v-slot:append >
                <q-btn flat round size="sm" icon="close" @click="toggleSearchBox" />
              </template>

            </q-input>
          -->


        </q-toolbar>

      </div>

      <router-view />
    </q-page-container>



  </q-layout>
</template>

<script>
import { onMounted, ref, computed, toRefs, reactive} from "vue"
import { useQuasar } from 'quasar'
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
    Language
},
  computed: {
    crumbs: function() {
      this.setMenu(this.$route.meta.menu)

      let pathArray = this.$route.path.split("/")

      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        if(!this.$route.matched[idx]) {
          return breadcrumbArray
        }

        if(this.$route.matched[idx].meta && this.$route.matched[idx].meta.parent) {
          let breadCrumbObj = {
            path: this.$route.matched[idx].meta.parent.path,
            to: this.$route.matched[idx].meta.parent.path,
            text: this.$route.matched[idx] ? (this.$route.matched[idx].meta.parent.breadCrumb || path) : (this.$route.matched[idx-1].meta.parent.breadCrumb || path),
            icon: this.$route.matched[idx] ? this.$route.matched[idx].meta.parent.icon : this.$route.matched[idx-1].meta.parent.icon,
          }
          breadcrumbArray.push(breadCrumbObj)

          breadCrumbObj = {
            path: this.$route.matched[idx].path,
            to: this.$route.matched[idx].path,
            text: this.$route.matched[idx].meta.breadCrumb,
            icon: this.$route.matched[idx].meta.icon
          }

          if(breadCrumbObj.to.includes("//")) {
            breadCrumbObj.to = breadCrumbObj.to.substring(1, breadCrumbObj.to.length)
          }
          breadcrumbArray.push(breadCrumbObj)

        } else {
          let breadCrumbObj = {
            path: path,
            to: breadcrumbArray[idx - 1]
              ?  breadcrumbArray[idx - 1].to + "/" + path
              : "/" + path,
            text: this.$route.matched[idx] ? (this.$route.matched[idx].meta.breadCrumb || path) : (this.$route.matched[idx-1].meta.breadCrumb || path),
            icon: this.$route.matched[idx] ? this.$route.matched[idx].meta.icon : this.$route.matched[idx-1].meta.icon,
          }

          if(breadCrumbObj.to.includes("//")) {
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
      search : ''
    })

    const searchResult = ref(searchResults)

    const { menu, getMenu, setMenu } = menuController()
    const { getUser } = userService()
    const { fetch } = apiService()


    const test = (val) => {
      alert("OID:" + val)
    }


    onMounted(async () => {
      if(!localStorage.getItem("sessionInfo")) {
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
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      searchBoxOpen,
      toggleSearchBox () {
        state.search = ''
        searchBoxOpen.value = !searchBoxOpen.value
      },
      searchResult,
      filterFn (val, update, abort) {
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
      logout : async () => {
        /*
        await fetch("userop/logout", {id:getUser().id}, true)
        localStorage.removeItem('sessionInfo')
        localStorage.removeItem('token')
        router.push('/login')
        */
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
    box-shadow: -1 5px 25pxrgba(34,41,47,.1) !important;
    border:1px solid rgba(34,41,47,.1);
  }

  .q-badge--floating {
    top: 1px !important;
    right: -2px !important;
  }

  .user-menu .q-hoverable:hover {
    color: #6610f2 !important;
  }

  .user-menu .q-hoverable:hover > .q-focus-helper {
    background-color: #6610f2 !important;
  }

  .menu-active {
    background: linear-gradient(118deg,#7367f0,rgba(115,103,240,.7)) !important;
    color : white !important;
    -webkit-box-shadow: 0 0 10px 1px rgb(115 103 240 / 70%) !important;
    box-shadow: 0 0 10px 1px rgba(115,103,240,.7) !important;
    border-radius: 4px !important;
  }

  .language .q-select__dropdown-icon {
    display: none !important;
  }

  .q-field--standard .q-field__control:before {
    border-bottom:none;
  }

  .q-toolbar .q-select__dropdown-icon {
    display: none;
  }

  .q-menu.q-position-engine {
    background: #f5f5f5  !important;
    color: #5e5873 !important;
    font-weight: 600 !important;
    box-shadow: none !important;
  }


</style>
