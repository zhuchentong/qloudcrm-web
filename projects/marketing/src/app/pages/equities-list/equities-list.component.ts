import { Component, OnInit } from '@angular/core';
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder, FormGroup } from '@angular/forms'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-equities-list',
  templateUrl: './equities-list.component.html',
  styleUrls: ['./equities-list.component.scss'],
  providers: [ModalService,PageService]
})
export class EquitiesListComponent implements OnInit {
  public back:boolean = true;
  public formGroup: FormGroup = this.fb.group({})
  public provideCompany: any[] =[
    {key:'总行',value:1},
    {key: '分行',value:2},
    {key: '支行网点',value:3},
    {key: '其他',value:4}];

  public equitiesTypes: any[] =[
    {key:'现金抵用券',value:1},
    {key: '现金红包券',value:2},
    {key: '流量充值包',value:3},
    {key: '话费充值包',value:4},
    {key: '电影票',value:5},
    {key: '兑换券',value:6},
    {key: '会员码',value:7}];
  // 支付后核销
  // 核销后支付
  // 赠予后核销

  public chargeOffType: any[] =[
    {key:'支付后核销',value:1},
    {key:'核销后支付',value:2},
    {key:'赠予后核销',value:3},
  ]
  public qeuitiesData: any[] ;

  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router) { }

  ngOnInit() {
    this.onRefresh();
  }
  public onRefresh(){
    console.log("fresh data list");
    this.apiService.getEquitiesList().subscribe(data => {
      this.qeuitiesData = data.sort(x => 0.5 - Math.random())
    })

  }

  /**
   * 上架
   * @param id
   */
  public putAway(id:string){
    this.message.success('上架成功');
    this.onRefresh();
  }

  /**
   * 暂停
   * @param id
   */
  public cease(id:string ){
    this.message.success('暂停成功');
    this.onRefresh();

  }

  /**
   * 删除
   * @param id
   */
  public delete(id:string ){
    this.message.success('删除成功');
    this.onRefresh();

  }

  /**
   * 查看详情
   * @param id
   */
  public checkDetail(id:string){
     this.router.navigate(['/marketing/equities-detail'])
  }
}
