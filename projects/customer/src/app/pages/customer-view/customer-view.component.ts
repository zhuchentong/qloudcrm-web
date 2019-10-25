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
  public tradeAgeOptions
  public tradeSexOptions
  public customerTagList = []
  public customerProductList = []
  public marketList = [
    {
      marketName: '天天一份利',
      time: '2019-09-23 09:40:00',
      sendCount: '32123',
      receiveCount: '9833',
      successCount: '7832',
      result: '成功'
    },
    {
      marketName: '健康理财宝C类',
      time: '2019-10-09 14:50:00',
      sendCount: '12123',
      receiveCount: '2833',
      successCount: '-',
      result: '未响应'
    },
    {
      marketName: '本行基金特惠',
      time: '2019-9-10 16:20:00',
      sendCount: '2123',
      receiveCount: '323',
      successCount: '-',
      result: '失败'
    }
  ]

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
    this.apiService.getCustomerViewData().subscribe(({ tradeAsset, tradeEvent, tradeAge, tradeSex }) => {
      this.getTradeAssetOption(tradeAsset)
      this.getTradeEventOption(tradeEvent)
      this.tradeAgeOptions = this.echartService.getOption({ type: 'pie', data: tradeAge })
      this.tradeSexOptions = this.echartService.getOption({ type: 'pie', data: tradeSex })
    })

    this.apiService.getCustomerTagList('tag').subscribe(data => {
      this.customerTagList = data.sort(x => 0.5 - Math.random()).slice(0,10)
    })

    this.apiService.getcostomerDetaildkList().subscribe(data => {
      this.customerProductList = data
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
