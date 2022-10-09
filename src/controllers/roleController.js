import { ref } from "vue"

let selectedRole = ref()
let roleList = ref()

const roleController = () => {

  const resetSelectedRole = () => {
    selectedRole.value = null
  }

  return {
    // PROPERTIES
    selectedRole,
    roleList,
    //FUNCTIONS
    resetSelectedRole,
  }
}
export default roleController
