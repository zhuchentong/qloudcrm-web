import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'

import customerEventList from '../../assets/json/customer-event.json'
import customerGroupList from '../../assets/json/customer-group.json'
import customerLevelList from '../../assets/json/customer-level.json'
import customerAssetsList from '../../assets/json/customer-assets.json'
@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

  /**
   * 获取客户事件列表
   */
  public getCustomerEventList() {
    return of(customerEventList)
  }

  public getCustomerGroupList() {
    return of(customerGroupList)
  }

  public getcustomerLevelList(){
    return of(customerLevelList)
  }

  public getcustomerAssetsList(){
    return of(customerLevelList)
  }
  
}
