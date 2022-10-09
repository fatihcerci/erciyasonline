import { ref } from "vue"

let selectedGroup = ref()
let groupList = ref()

const groupController = () => {

  const resetSelectedGroup = () => {
    selectedGroup.value = null
  }

  return {
    // PROPERTIES
    selectedGroup,
    groupList,
    //FUNCTIONS
    resetSelectedGroup,
  }
}
export default groupController
