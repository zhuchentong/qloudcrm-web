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
import EquitiesManageList from '../../assets/json/equities-list.json';
@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

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

  public getcustomerDelList (){
    return of(customerDelList)
  }

  public getRecommendManageList() {
    return of(RecommendManageList)
  }

  public getEquitiesList() {
    return of(EquitiesManageList)
  }
}
