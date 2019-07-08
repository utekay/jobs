import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  SET_JOB_NAME,
  SET_JOBS,
  ADD_JOBS,
  SET_LOADING
} from './mutations'

export default new Vuex.Store({
  state: {
    jobs: [],
    jobName: '',
    lastPageCount: 0,
    isLoading: false
  },
  mutations: {
    [SET_JOB_NAME]: (state, { value }) => {
      state.jobName = value
    },
    [SET_JOBS]: (state, { jobs }) => {
      state.jobs = jobs
      state.lastPageCount = jobs.length
    },
    [ADD_JOBS]: (state, { jobs }) => {
      state.jobs = [...state.jobs, ...jobs]
      state.lastPageCount = jobs.length
    },
    [SET_LOADING]: (state, { value }) => {
      state.isLoading = value
    }
  },
  actions: {
    setJobName ({ commit }, { value }) {
      commit(SET_JOB_NAME, { value })
    },
    setJobs ({ commit }, { jobs }) {
      commit(SET_JOBS, { jobs })
    },
    addJobs ({ commit }, { jobs }) {
      commit(ADD_JOBS, { jobs })
    },
    setLoading ({ commit }, { value }) {
      commit(SET_LOADING, { value })
    }
  }
})
