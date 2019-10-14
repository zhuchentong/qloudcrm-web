import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ApiService } from '../../services/api.service'
import { EchartService } from '@app/shared/utils/echart.service'

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css'],
  providers: [ApiService]
})
export class CustomerViewComponent implements OnInit {
  public formGroup: FormGroup
  public customerList
  public tradeAssetOptions
  public tradeEventOptions

  constructor(private fb: FormBuilder, private apiService: ApiService, private echartService: EchartService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      code: [''],
      name: [''],
      sex: [''],
      age: [''],
      manager: [''],
      dayAUM: [''],
      nowAUM: [''],
      content: ['']
    })

    this.onRefresh()
    this.getCustomerViewData()
  }

  public onRefresh() {
    this.apiService.getCustomerEventList().subscribe(data => {
      this.customerList = data
    })
  }

  public getCustomerViewData() {
    this.apiService.getCustomerViewData().subscribe(({ tradeAsset, tradeEvent }) => {
      this.getTradeAssetOption(tradeAsset)
      this.getTradeEventOption(tradeEvent)
    })
  }

  public getTradeEventOption(data) {
    this.tradeEventOptions = this.echartService.getOption({ type: 'pie', data })
  }

  public getTradeAssetOption(data) {
    this.tradeAssetOptions = this.echartService.getOption({ type: 'pie', data })
  }

  public onExportExcel() {}
}
