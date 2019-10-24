import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'

import TemplatelistList from '../../assets/json/template-list.json'
import customerDelList from '../../assets/json/customer-del.json'

import customerTagList from '../../assets/json/customer-tag.json'
import customerList from '../../assets/json/customer.json'
import MarketActivationConfliction from '../../assets/json/marketActivationConfliction.json'
import MarketChannelOperation from '../../assets/json/marketChannelOperation.json'
import RecommendManageList from '../../assets/json/recommendmanagelist.json'
import eventList from '../../assets/json/event-list.json'
import EquitiesManageList from '../../assets/json/equities-list.json'
import ActivityList from '../../assets/json/activity-list.json'
import ActivationMonitorList from '../../assets/json/activation-monitor-list.json'
import ActivationStattistic from '../../assets/json/activation-monitor-detail.json'
import { Store } from '@ngxs/store'
@Injectable()
export class ApiService {
  constructor(private net: NetService, private store: Store) {}

  public getEventList() {
    return of(eventList)
  }

  public getCustomerList() {
    return of(customerList)
  }
  public getTemplatelistList() {
    return of(TemplatelistList)
  }

  public getCustomerTagList(type?, parent?) {
    return of(
      customerTagList
        .filter(x => type === undefined || x.type === type)
        .filter(x => parent === undefined || x.parent === parent)
    )
  }
  public getConflictMarketActivation() {
    return of(MarketActivationConfliction)
  }

  public getMarketChannelOpertion() {
    return of(MarketChannelOperation)
  }

  public getcustomerDelList() {
    return of(customerDelList)
  }

  public getRecommendManageList() {
    return of(RecommendManageList)
  }

  public getEquitiesList() {
    return of(EquitiesManageList)
  }

  public getActivityList() {
    return of(this.store.selectSnapshot(state => state.activity.activityList).map(x => Object.assign({}, x)))
  }

  public getActivity(id) {
    const list = this.store.selectSnapshot(state => state.activity.activityList)
    return of(list.find(x => x.id.toString() === id.toString()))
  }

  public getActivationMonitorList() {
    return of(ActivationMonitorList)
  }

  public getActivationStattistic() {
    return of(ActivationStattistic)
  }
}
