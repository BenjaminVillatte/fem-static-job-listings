import { createStore } from 'vuex'
import json from '@/data.json'

const store = createStore({
  state:{
    jobs: [],
    filters: []
  },

  getters: {
    getJobs (state) {
      return state.jobs
    },
    getFilters (state) {
      return state.filters
    },
    getJobsFiltered (state, getters) {
      if (!getters.hasFilters) {
        return state.jobs
      }
      
      return state.jobs.filter(job => {
        let match = true;
        const properties = job.languages
          .concat(job.tools)
          .concat([job.role])
          .concat([job.level])
          
        state.filters.forEach(filter => {
          match = match && properties.indexOf(filter) >= 0
        })

        return match
      })
    },
    hasFilters (state) {
      return state.filters.length > 0
    }
  },

  actions: {
    loadJobs ({commit}) {
      commit('SET_JOBS', json)
    },
    addFilter({commit, state}, filter) {
      if (state.filters.indexOf(filter) < 0) {
        commit('ADD_FILTER', filter)
      }
    },
    removeFilter({commit, state}, filter) {
      const filterIndex = state.filters.indexOf(filter)
      if (filterIndex >= 0) {
        commit('REMOVE_FILTER_BY_INDEX', filterIndex)
      }
    },
    clearFilters({commit}) {
      commit('CLEAR_FILTERS')
    }
  },

  mutations: {
    SET_JOBS (state, jobs) {
      state.jobs = jobs
    },
    ADD_FILTER(state, filter) {
      state.filters.push(filter)
    },
    REMOVE_FILTER_BY_INDEX(state, index) {
      state.filters.splice(index, 1)
    },
    CLEAR_FILTERS(state) {
      state.filters = []
    }
  }
})

export default store
