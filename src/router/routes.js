import Base from "layouts/BaseLayout.vue"
import Main from "layouts/MainLayout.vue"
import Home from "pages/Home.vue"
import Login from "pages/Login.vue"
import ForgotPassword from "pages/ForgotPassword.vue"
import EmailSettings from "pages/EmailSettings.vue"
import Organization from "pages/organization/Organization.vue"
import Groups from "pages/organization/Groups.vue"
import GroupView from "pages/organization/GroupView.vue"
import Roles from "pages/organization/Roles.vue"
import RoleView from "pages/organization/RoleView.vue"
import Users from "pages/organization/Users.vue"
import UserView from "pages/organization/UserView.vue"
import UserUpdatePassword from "pages/organization/UserUpdatePassword.vue"

const routes = [
  {
    path: "/login",
    component: Base,
    children: [
      {
        name: "Login",
        path: "/login",
        component: Login,
      },
    ],
    meta: { requiresAuth: false },
  },
  {
    path: "/forgotpassword",
    component: Base,
    children: [
      {
        name: "ForgotPassword",
        path: "/forgotpassword",
        component: ForgotPassword,
      },
    ],
    meta: { requiresAuth: false },
  },
  {
    path: "/",
    component: Main,
    meta: {
      breadCrumb: 'Ana Sayfa',
      icon : 'home'
    },
    children: [
      {
        path: "",
        component: Home,
        meta: { requiresAuth: false, menu : 'home' }
      },
      {
        path: "/emailsettings",
        component: EmailSettings,
        meta: { requiresAuth: false, breadCrumb: 'E-posta Ayarları', icon : 'mail', menu : 'emailsettings' }
      },
      {
        path: "/organization",
        component: Organization,
        meta: { requiresAuth: false, breadCrumb: 'Organizasyon Tanımları', icon : 'corporate_fare', menu : 'organization' },
        children : [
          {
            path: "groups",
            component: Groups,
            props : true,
            meta: { requiresAuth: false, breadCrumb: 'Grup Tanımları', icon : 'groups', menu : 'groups' },
            children : [

            ]
          },
          {
            path: "groups/view",
            props:true,
            component: GroupView,
            meta: { requiresAuth: false, breadCrumb: 'Grup Ekle-Düzenle', icon : 'edit', menu : 'groups', parent : { path: "/organization/groups", breadCrumb: 'Grup Tanımları', icon : 'groups' }},
          },


          {
            path: "roles",
            component: Roles,
            meta: { requiresAuth: false, breadCrumb: 'Rol Tanımları', icon : 'manage_accounts', menu : 'roles'},
          },
          {
            path: "roles/view",
            props:true,
            component: RoleView,
            meta: { requiresAuth: false, breadCrumb: 'Rol Ekle-Düzenle', icon : 'edit', menu : 'roles', parent : { path: "/organization/roles", breadCrumb: 'Rol Tanımları', icon : 'manage_accounts' }},
          },
          {
            path: "users",
            component: Users,
            meta: { requiresAuth: false, breadCrumb: 'Kullanıcı Tanımları', icon : 'person_add', menu : 'users'},
          },
          {
            path: "users/view",
            props:true,
            component: UserView,
            meta: { requiresAuth: false, breadCrumb: 'Kullanıcı Ekle-Düzenle', icon : 'edit', menu : 'users', parent : { path: "/organization/users", breadCrumb: 'Kullanıcı Tanımları', icon : 'person_add' }},
          },
          {
            path: "users/updatePassword",
            props:true,
            component: UserUpdatePassword,
            meta: { requiresAuth: false, breadCrumb: 'Şifre Güncelle', icon : 'edit', menu : 'users', parent : { path: "/organization/users", breadCrumb: 'Kullanıcı Tanımları', icon : 'person_add' }},
          },
        ]
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
]

export default routes
