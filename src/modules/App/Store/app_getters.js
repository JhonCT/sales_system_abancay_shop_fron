const getters = {
  getMenuType(state) {
    return state.menuType
  },
  getSelectedMenuHasSubItems(state) {
    return state.selectedMenuHasSubItems
  },
  getMenuClickCount(state) {
    return state.clickCount % 4
  }
}

export default getters
