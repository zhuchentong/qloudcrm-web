import { NetService } from '@core/http'
import { Injectable } from '@angular/core'
import { of } from 'rxjs'

@Injectable()
export class ApiService {
  constructor(private net: NetService) {}
}
