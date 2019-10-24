import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store'
import { ExtendState } from '@app/store/extend'
import { AddActivityAction, DeleteActivityAction } from '../action/activity.action'

import activityListJson from '../../../assets/json/activity-list.json'

@State<any>({
  name: 'activity',
  defaults: {
    activityList: activityListJson || []
  }
})
export class ActivityState extends ExtendState {
  /**
   * 添加营销活动
   * @param state
   * @param param1
   */
  @Action(AddActivityAction)
  public addActivity<T>(state: StateContext<any>, { activity }: AddActivityAction) {
    const { activityList } = state.getState()
    activity.id = Date.now()
    state.setState({
      activityList: [...activityList, activity]
    })
  }

  /**
   * 删除营销活动
   * @param state store
   * @param param 模版参数
   */
  @Action(DeleteActivityAction)
  public deleteActivity<T>(state: StateContext<any>, { id }: DeleteActivityAction) {
    const { activityList } = state.getState()
    const list = activityList.filter(x => x.id !== id)
    state.setState({
      activityList: list
    })
  }
}
