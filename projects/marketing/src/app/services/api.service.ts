import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import MarketActivationConfliction from '../../assets/json/marketactivationconfliction.json'
import MarketChannelOperation from '../../assets/json/marketchanneloperation.json'
import RecommendManageList from  '../../assets/json/recommendmanagelist.json'
@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

  public getConflictMarketActivation (){
    return of(MarketActivationConfliction);
  }

  public getMarketChannelOpertion (){
    return of(MarketChannelOperation);
  }

  public getRecommendManageList (){
    return of(RecommendManageList);
  }

}
