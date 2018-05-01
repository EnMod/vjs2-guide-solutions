export default {
  loadData: ({ commit }, pl) => {
    commit(`LOAD_${pl.type}`, pl)
  },
  changeStatus: ({ commit }, pl) => {
    commit("statusChanger", pl)
  }
}
