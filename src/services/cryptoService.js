import { inject } from "vue"

const cryptoService = () => {

  let key = "a1f0dec47566bda95f9b0c896d97aa375d7a08012380cac495d9aeb498cd47c0"
  const cryptojs = inject('cryptojs')

  const encrypt = (val) => {
    return cryptojs.AES.encrypt(val, key).toString()
  }

  const decrypt = (val) => {
    return cryptojs.AES.decrypt(val, key).toString(cryptojs.enc.Utf8)
  }

  return {
    // PROPERTIES
    cryptojs,
    encrypt,
    decrypt,
  }
}

export default cryptoService
