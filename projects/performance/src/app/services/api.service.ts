import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import orgRankData from "../../assets/json/orgranking.json";
import custRankData from "../../assets/json/custranking.json";

@Injectable()
export class ApiService {
  constructor(private net: NetService) {}
  public getOrgBankList(){
    return of(orgRankData);
  }
  public getCustBankList(){
    return of(custRankData);
  }
}
