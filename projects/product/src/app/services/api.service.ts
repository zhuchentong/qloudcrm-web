import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'

import productList from '../../assets/json/product-list.json'
import comboList from '../../assets/json/combo-list.json'
import customerTagList from '../../assets/json/customer-tag.json'
import customerList from '../../assets/json/customer.json'
import customerGroupList from '../../assets/json/customer-group.json'

@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

  public getProductList(type?, parent?) {
    const data = productList
      .filter(x => type === undefined || x.type === type)
      .filter(x => parent === undefined || x.parent === parent)

    if (type === 'product') {
      data.forEach((x: any) => {
        const target = productList.find(item => item.id === x.parent)
        x.productType = target.name
      })
    }

    return of(data)
  }

  public getProduct(id) {
    // const product = productList.find(x => x.id === 4101) as any
    const product = productList.find(x => x.id === Number(id)) as any
    const target = productList.find(item => item.id === product.parent)
    product.productType = target.name
    return of(product)
  }

  public getcomboList() {
    return of(comboList)
  }

  public getCustomerTagList(type?, parent?) {
    return of(
      customerTagList
        .filter(x => type === undefined || x.type === type)
        .filter(x => parent === undefined || x.parent === parent)
    )
  }

  public getCustomerList() {
    return of(customerList)
  }

  public getCustomerGroupList() {
    return of(customerGroupList)
  }
}
