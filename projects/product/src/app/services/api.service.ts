import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'

import productList from '../../assets/json/product-list.json'
@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

  public getProductList(type?, parent?) {
    return of(
      productList
        .filter(x => type === undefined || x.type === type)
        .filter(x => parent === undefined || x.parent === parent)
        .map((x: any) => {
          if (type === 'product') {
            const target = productList.find(catalog => catalog.id === parent)
            x.productType = target.name
          }

          return x
        })
    )
  }

  public getProduct(id) {
    return of(productList.find(x => x.id === id))
  }
}
