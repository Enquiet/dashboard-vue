import api from '@/api/api.js'

export default {
  namespaced: true,
  state: {
    tokenUser: null
  },
  mutations: {
    updateLoginUser (state, token) {
      state.tokenUser = token
    }
  },
  actions: {
    async LoadingLoginUser ({ commit }, data) {
      try {
        const token = await api.fetchApi('api/v2/user/auth/login', 'POST', data)
        commit('updateLoginUser', token.data.token)
        localStorage.setItem('token', token.data.token)
      } catch (e) {
        console.log('ошибка в экшане LoadingLoginUser')
        throw e
      }
    }
  }
}
