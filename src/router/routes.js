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
      icon: 'home'
    },
    children: [
      {
        path: "/",
        component: Home,
        meta: { requiresAuth: false, menu: 'home' }
      },


      {
        path: "/howtowork",
        name: 'howtowork',
        component: () => import("pages/HowToWork.vue"),
      },
      {
        path: "/faquestions",
        name: 'faquestions',
        component: () => import("pages/FAQuestions.vue"),
      },
      {
        path: "/about",
        name: 'about',
        component: () => import("pages/About.vue"),
      },
      {
        path: "/blog",
        name: 'blog',
        component: () => import("pages/Blog.vue"),
      },
      {
        path: "/contact",
        name: 'contact',
        component: () => import("pages/Contact.vue"),
      },


    ],
  },


  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
]

export default routes
