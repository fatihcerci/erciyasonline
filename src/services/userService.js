import cryptoService from "../services/cryptoService"

const userService = () => {

  const { encrypt, decrypt } = cryptoService()

  const session = localStorage.getItem('sessionInfo') ? JSON.parse(JSON.parse(decrypt(localStorage.getItem('sessionInfo')))) : {}

  const getUser = () => {
    return session
  }

  return {
    session,
    getUser
  }
}

export default userService
