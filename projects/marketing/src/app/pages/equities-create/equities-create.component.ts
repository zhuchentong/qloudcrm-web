import { Component, OnInit } from '@angular/core';
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder } from '@angular/forms'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-equities-create',
  templateUrl: './equities-create.component.html',
  styleUrls: ['./equities-create.component.scss'],
  providers: [ModalService,PageService]
})
export class EquitiesCreateComponent implements OnInit {
  public back:boolean = true;
  public fileList: any[];
  public equitiesTypes: any[] =[
    {key:'现金抵用券',value:1},
    {key: '现金红包券',value:2},
    {key: '流量充值包',value:3},
    {key: '话费充值包',value:4},
    {key: '电影票',value:5},
    {key: '兑换券',value:6},
    {key: '会员码',value:7}];

  public chargeOffType: any[] =[
    {key:'支付后核销',value:1},
    {key:'核销后支付',value:2},
    {key:'赠予后核销',value:3},
  ]

  public provideCompany: any[] =[
    {key:'总行',value:1},
    {key: '分行',value:2},
    {key: '支行网点',value:3},
    {key: '其他',value:4}];

  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router) { }

  ngOnInit() {
  }

  public limit1024(file: File): boolean {
    if (file.size > 1024000) {
      this.message.info('文件超过了 1024 kb.')
      return false
    }
    return true
  }

}
