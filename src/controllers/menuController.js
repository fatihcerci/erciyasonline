import { ref } from "vue"

let menu = ref('home')

const menuController = () => {

  const getMenu = () => {
    return menu.value
  }

  const setMenu = (val) => {
    val = val == "" ? 'home' : val
    menu.value = val
  }

  return {
    // PROPERTIES
    menu,
    getMenu,
    setMenu
  }
}
export default menuController
