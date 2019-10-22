import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import EventListData from '../../assets/json/eventlist.json'

@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

  /**
   *
   */
  public getEventList(){
    return of(EventListData.dataList);
  }

  public getEventType(){
    return of(EventListData.eventType);
  }

  public getTradeArea(){
    return of(EventListData.tradeArea);
  }

  public getCustomerLevel(){
    return of(EventListData.customerLevel);
  }

  public getEventChannel(){
    return of(EventListData.channel);
  }

  public getActivation(){
    return of(EventListData.activation);
  }
  public getRemindType(){
    return of(EventListData.remindType);
  }
}
