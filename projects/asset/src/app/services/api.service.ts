import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import ProductList from '../../assets/json/productlist.json'
import Configure from '../../assets/json/customerasset.json'
@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

  public getProductList(){
    return of(ProductList);
  }
  public getAssetConfigure(){
    return of(Configure)
  }
}
