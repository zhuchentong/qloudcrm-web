import { NetService } from '@core/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {
  constructor(private net: NetService) {}
}
