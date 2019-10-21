import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder } from '@angular/forms'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'
import { EchartService } from '@shared/utils/echart.service'

@Component({
  selector: 'app-monitor-detail',
  templateUrl: './monitor-detail.component.html',
  styleUrls: ['./monitor-detail.component.scss'],
  providers: [ModalService,PageService]
})
export class MonitorDetailComponent implements OnInit {
  public pageChart;
  public equitieStatisticChart;
  public publicedEquitiesCount;
  public publicedEquitiesUsed;
  public  remainPublicedEquities;
  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router,
              private echartService: EchartService) { }

  ngOnInit() {
    this.getCustomerViewData();
  }

  public getCustomerViewData() {
    this.apiService.getActivationStattistic().subscribe(({ chartData,equitiesInfo }) => {
      // this.getTradeAssetOption(tradeAsset)
      // this.getTradeEventOption(tradeEvent)
      this.publicedEquitiesCount = equitiesInfo.publicedEquitiesCount;
      this.publicedEquitiesUsed = equitiesInfo.publicedEquitiesUsed;
      this.remainPublicedEquities = equitiesInfo.remainPublicedEquities;
      this.pageChart = this.echartService.getOption({ type: 'funnel', data: chartData });
      this.equitieStatisticChart= this.echartService.getOption({ type: 'pie', data: equitiesInfo.publicedEquitiesUsed })
    });
  }
}
