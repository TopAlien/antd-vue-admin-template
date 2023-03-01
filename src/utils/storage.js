const TOKEN = 'token'

export const setToken = (value) => {
    localStorage.setItem(TOKEN, value)
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN)
}

export const getToken = () => {
   return localStorage.getItem(TOKEN)
}

