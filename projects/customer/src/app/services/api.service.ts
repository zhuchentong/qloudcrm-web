import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'

import customerUserList from '../../assets/json/customer.json'
import customerEventList from '../../assets/json/customer-event.json'
import customerGroupList from '../../assets/json/customer-group.json'
import customerLevelList from '../../assets/json/customer-level.json'
import customerAssetsList from '../../assets/json/customer-assets.json'
import customerTagList from '../../assets/json/customer-tag.json'
import customerViewData from '../../assets/json/customer-view.json'
import costomerDetaildkList from '../../assets/json/customer-detaildk.json'
import customerSelectList from '../../assets/json/customer-select.json'
import customerDetailcontact from '../../assets/json/customer-detailcontact.json'
import customerMyassignList from '../../assets/json/customer-myassign.json'
import cuctomerAssignList from '../../assets/json/customer-assign.json'
import customerTagUser from '../../assets/json/customer-tag-user.json'
import customerTagRecord from '../../assets/json/customer-tag-record.json'
@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

  public getCustomerList() {
    return of(customerUserList)
  }
  /**
   * 获取客户事件列表
   */
  public getCustomerEventList() {
    return of(customerEventList)
  }

  public getCustomerGroupList() {
    return of(customerGroupList)
  }

  public getcustomerLevelList() {
    return of(customerLevelList)
  }

  public getcustomerAssetsList() {
    return of(customerAssetsList)
  }

  public getCustomerTagList(type?, parent?) {
    return of(
      customerTagList
        .filter(x => type === undefined || x.type === type)
        .filter(x => parent === undefined || x.parent === parent)
    )
  }

  public getTagDetail(id) {
    return of(customerTagList.find(x => x.id.toString() === id.toString()))
  }

  public getCustomerViewData() {
    return of(customerViewData)
  }

  public getcostomerDetaildkList() {
    return of(costomerDetaildkList)
  }
  public getcustomerDetailcontact() {
    return of(customerDetailcontact)
  }

  public getCustomerSelectList() {
    return of(customerSelectList)
  }

  public getcustomerMyassignList() {
    return of(customerMyassignList)
  }

  public getcuctomerAssignList() {
    return of(cuctomerAssignList)
  }

  public getCustomerTagUserList() {
    return of(customerTagUser)
  }
  public getCustomerTagRecordList() {
    return of(customerTagRecord)
  }
}
