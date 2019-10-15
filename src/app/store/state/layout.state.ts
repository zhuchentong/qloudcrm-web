import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store'
import { ExtendState } from '@app/store/extend'
import { UpdatePathAction, UpdateMenuAction } from '../action/layout.action'

@State<any>({
  name: 'layout',
  defaults: {
    path: '',
    menu: [],
    currentMenu: {}
  }
})
export class LayoutState extends ExtendState {
  @Action(UpdatePathAction)
  public updatePath<T>(state: StateContext<any>, { path }: UpdatePathAction) {
    const menuList = state.getState().menu

    const target = menuList.find(x => x.pluginPath === path)
    this.updateState(state, {
      path,
      currentMenu: target
    })
  }

  @Action(UpdateMenuAction)
  public updateMenu<T>(state: StateContext<any>, { menu }: UpdateMenuAction) {
    const current = state.getState().menu

    if (!current.find(x => x.pluginPath === menu.pluginPath)) {
      this.updateState(state, {
        menu: [...state.getState().menu, menu].sort((x, y) => x.pluginOrder - y.pluginOrder)
      })
    } else {
      const list = state.getState().menu.map(x => (x.pluginPath === menu.pluginPath ? menu : x))
      this.updateState(state, {
        menu: list.sort((x, y) => x.pluginOrder - y.pluginOrder)
      })
    }
  }
}
