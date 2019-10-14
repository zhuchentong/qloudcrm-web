import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ApiService } from '../../services/api.service'

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

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

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
    this.tradeEventOptions = this.getEchartPieOption(data)
  }

  public getTradeAssetOption(data) {
    this.tradeAssetOptions = this.getEchartPieOption(data)
  }

  public onExportExcel() {}

  private getEchartPieOption(data, option = {}) {
    return Object.assign(
      {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: data.map(x => x.name)
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data
          }
        ]
      },
      option
    )
  }
}
