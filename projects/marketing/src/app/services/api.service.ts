import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'


import TemplatelistList from  '../../assets/json/template-list.json'
import customerTagList from  '../../assets/json/customer-tag.json'

import MarketActivationConfliction from '../../assets/json/marketActivationConfliction.json'
import MarketChannelOperation from '../../assets/json/marketChannelOperation.json'

@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

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
  public getConflictMarketActivation (){
    return of(MarketActivationConfliction)
  }

  public getMarketChannelOpertion (){
    return of(MarketChannelOperation)
  }

}

