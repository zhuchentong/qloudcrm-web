import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'
import { EchartService } from '@shared/utils/echart.service'

@Component({
  selector: 'app-finanical-config',
  templateUrl: './finanical-config.component.html',
  styleUrls: ['./finanical-config.component.scss'],
  providers: [ModalService, PageService]
})
export class FinanicalConfigComponent implements OnInit {

  public formGroup: FormGroup = this.fb.group({customerName:['张三'],
                                                           riskLevel:[1],
    assumption: this.fb.group({ start:[''],
      end:['']
    })
  });
  public assetConfigure;
  public managerWealth;
  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private echartService: EchartService,
              private router: Router) { }

  ngOnInit() {
  }

  public onRefresh(){
    console.log(JSON.stringify( this.formGroup.value));
   // this.reflashData();
    this.getCustomerViewData();
  }

  public getCustomerViewData() {
    this.apiService.getAssetConfigure().subscribe(({assetPartition,manageWhealth }) => {
      // this.getTradeAssetOption(tradeAsset)
      // this.getTradeEventOption(tradeEvent)
      this.managerWealth = manageWhealth;
      this.assetConfigure = this.echartService.getOption({ type: 'pie', data: assetPartition });
    });
  }

}
