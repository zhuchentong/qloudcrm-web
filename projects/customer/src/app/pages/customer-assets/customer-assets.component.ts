import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-customer-assets',
  templateUrl: './customer-assets.component.html',
  styleUrls: ['./customer-assets.component.css'],
  providers: [ApiService]
})
export class CustomerAssetsComponent implements OnInit {
  public dataassets =[]
  public seltimes = [
    { value: '一周内', label: '一周内' },
    { value: '一月内', label: '一月内' },
    { value: '三月内', label: '三月内' },
    { value: '半年内', label: '半年内' },
    { value: '一年内', label: '一年内' }
  ]
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getcustomerAssetsList().subscribe(data => {
      this.dataassets = data
    })
  }
}
