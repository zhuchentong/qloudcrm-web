import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'

import productList from '../../assets/json/product-list.json'
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
    const product = productList.find(x => x.id === id) as any
    const target = productList.find(item => item.id === product.parent)
    product.productType = target.name

    return of(product)
  }
}
