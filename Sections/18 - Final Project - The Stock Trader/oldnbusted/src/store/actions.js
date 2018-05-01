export default {
  loadData: ({ commit }, pl) => {
    commit("loadToData", pl)
  },
  changeStatus: ({ commit }, pl) => {
    commit("statusChanger", pl)
  }
}
