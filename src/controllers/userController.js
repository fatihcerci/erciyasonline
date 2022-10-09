import { ref } from "vue"

let selectedUser = ref()
let userList = ref()
let groupOptions = []
let roleOptions = []

const userController = () => {

  const resetSelectedUser = () => {
    selectedUser.value = null
  }

  return {
    // PROPERTIES
    selectedUser,
    userList,
    groupOptions,
    roleOptions,
    //FUNCTIONS
    resetSelectedUser,
  }
}
export default userController
