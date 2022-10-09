import VTour from './components/tour/VTour.vue'
import VStep from './components/tour/VStep.vue'

const install = (app) => {
  app.config.globalProperties.$tours = {}

  app.component(VTour.name, VTour)
  app.component(VStep.name, VStep)
}

export default install
