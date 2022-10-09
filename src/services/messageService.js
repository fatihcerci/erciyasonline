
import { createI18n } from 'vue-i18n/index'
import messages from 'src/i18n'

const messageService = () => {
  const getMessage = (code) => {
    const i18n = createI18n({
      locale: JSON.parse(localStorage.getItem("language")).value,
      fallbackLocale: JSON.parse(localStorage.getItem("language")).value,
      messages
    })

    let messageCodes = []

    messageCodes["MSG0000"] = i18n.global.t("appMessages.MSG0000")
    messageCodes["MSG0001"] = i18n.global.t("appMessages.MSG0001")
    messageCodes["MSG0002"] = i18n.global.t("appMessages.MSG0002")
    messageCodes["MSG0003"] = i18n.global.t("appMessages.MSG0003")
    messageCodes["MSG0004"] = i18n.global.t("appMessages.MSG0004")

    return messageCodes[code] ? messageCodes[code] : code
  }

  return {
    getMessage,
  }
}

export default messageService
