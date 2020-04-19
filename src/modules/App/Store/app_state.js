import { defaultMenuType } from '../../../constants/config'

const state = {
  menuType: defaultMenuType,
  clickCount: 0,
  selectedMenuHasSubItems: defaultMenuType === 'menu-default'
}

export default state
