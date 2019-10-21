import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Location } from '@angular/common'
import { FormBuilder } from '@angular/forms'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-equities-detail',
  templateUrl: './equities-detail.component.html',
  styleUrls: ['./equities-detail.component.scss'],
  providers: [ApiService, QlMessageService]
})
export class EquitiesDetailComponent implements OnInit {
  public back:boolean = true;
  public fileList: any[];
  public equitiesTypes: any[] =[
    {key:'请选择',value:null},
    {key:'现金抵用券',value:1},
    {key: '现金红包券',value:2},
    {key: '流量充值包',value:3},
    {key: '话费充值包',value:4},
    {key: '电影票',value:5},
    {key: '兑换券',value:6},
    {key: '会员码',value:7}];

  public chargeOffType: any[] =[
    {key:'请选择',value:null},
    {key:'支付后核销',value:1},
    {key:'核销后支付',value:2},
    {key:'赠予后核销',value:3},
  ]

  public provideCompany: any[] =[
    {key:'请选择',value:null},
    {key:'总行',value:1},
    {key: '分行',value:2},
    {key: '支行网点',value:3},
    {key: '其他',value:4}];
  public pageData={
    type:"",
    name:"",
    chargeOffType:"",
    company:"",
    upTime:"",
    count:"100",
    lastCount:"10",
    expireTime:"2050-12-31",
    edesc:"支持用户购买理财产品权益",
    escope:"1",
    createTime:"2019-10-18",
    createDep:"支行",
    updateTime:"2019-10-18"
  }
  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router) { }

  ngOnInit() {
  }

}
