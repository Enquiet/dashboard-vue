import api from '@/api/api.js'

export default {
  namespaced: true,
  state: {
    projectData: null,
    listStagesProject: null,
    levelProjectData: null,
    infoProjectData: null
  },
  mutations: {
    updateProjectData (state, project) {
      state.projectData = project
    },
    updateListStages (state, stages) {
      state.listStagesProject = stages
    },
    updateLevelProject (state, level) {
      state.levelProjectData = level
    },
    updateInfoProject (state, info) {
      state.infoProjectData = info
    }
  },
  getters: {
    addFakeData (state) {
      const date = new Date()
      const dayCreateted = state.infoProjectData.date = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
      state.infoProjectData = { dayCreateted, ...state.infoProjectData }
    }
  },
  actions: {
    async LoadingLevelProject ({ commit }) {
      try {
        const level = await api.fetchApi('api/v2/dictionary/level/short')
        commit('updateLevelProject', level.data)
      } catch (e) {
        console.log('ошибка в экшане LoadingLevelProject')
        throw e
      }
    },
    async LoadingStagesList ({ commit }) {
      try {
        const stages = await api.fetchApi('api/v2/dictionary/project-stage/short')
        commit('updateListStages', stages.data)
      } catch (e) {
        console.log('ошибка в экшане LoadingStagesList')
        throw e
      }
    },
    async createNewProject ({ commit }, data) {
      try {
        const project = await api.fetchApi('api/v2/project/profile/tab/my-projects/create-project', 'POST', data)
        commit('updateProjectData', project.data)
        localStorage.setItem('project', JSON.stringify(project.data))
      } catch (e) {
        console.log('ошибка в экшане createNewProject')
        throw e
      }
    },
    async loadingInfoProject ({ commit }, id) {
      try {
        const info = await api.fetchApi(`/api/v2/project/edit/${id}`)
        commit('updateInfoProject', info.data)
      } catch (e) {
        console.log('ошибка в экшане createNewProject')
        throw e
      }
    }
  }
}
