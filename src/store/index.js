import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './module/authentication'
import project from './module/project'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    authentication,
    project
  }
})
