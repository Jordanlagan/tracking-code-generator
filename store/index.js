// holds your root state
export const state = () => ({
  trackingObjective: '',
  trackingPlatform: ''
})

// contains your mutations
export const mutations = {
  SET_OBJECTIVE(state, value){
    state.trackingObjective = value
  },
  SET_PLATFORM(state, value){
    state.trackingPlatform = value
  },
}
// your root getters
export const getters = {
}