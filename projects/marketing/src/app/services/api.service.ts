import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import MarketActivationConfliction from '../../assets/json/marketActivationConfliction.json'
import MarketChannelOperation from '../../assets/json/marketChannelOperation.json'
@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

  public getConflictMarketActivation (){
    return of(MarketActivationConfliction)
  }

  public getMarketChannelOpertion (){
    return of(MarketChannelOperation)
  }

}
