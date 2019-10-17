import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'

import TemplatelistList from  '../../assets/json/template-list.json'

@Injectable()
export class ApiService {
  constructor(private net: NetService) {}

  public getTemplatelistList() {
    return of(TemplatelistList)
  }
}

