import { Notify } from "quasar"

const notification = () => {
  const warn = (message, pos) => {
    Notify.create({
      message: message,
      color: "warning",
      textColor: "dark",
      icon: "warning",
      position: !pos ? "bottom" : pos,
      classes: 'glossy',
    })
  }

  const info = (message, pos) => {
    Notify.create({
      message: message,
      textColor: "dark",
      color: "info",
      position: !pos ? "bottom" : pos,
      classes: 'glossy',
    })
  }

  const error = (message, pos) => {
    Notify.create({
      color: "red-5",
      position: !pos ? "top" : pos,
      textColor: "dark",
      message: message,
      icon: "report_problem",
      classes: 'glossy',
    })
  }

  const success = (message, pos) => {
    Notify.create({
      message: message,
      textColor: "white",
      color: "deep-purple-5",
      position: !pos ? "bottom" : pos,
      classes: 'glossy',
      icon : 'check'
    })
  }
  return {
    warn,
    info,
    error,
    success,
  }
}
export default notification
