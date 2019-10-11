import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'

import customerEventList from '../../assets/json/customer-event.json'
import customerGroupList from '../../assets/json/customer-group.json'
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
}
