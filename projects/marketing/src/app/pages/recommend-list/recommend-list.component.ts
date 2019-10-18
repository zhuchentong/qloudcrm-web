import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-recommend-list',
  templateUrl: './recommend-list.component.html',
  styleUrls: ['./recommend-list.component.scss'],
  providers: [ModalService,PageService]
})
export class RecommendListComponent implements OnInit {
  public back:boolean = true;
  public formGroup: FormGroup = this.fb.group({})
  public recommendSource: any[] =[
                                  {key:'请选择', value:null},
                                  {key:'客户经理',value:'1'},
                                  {key:'手机APP',value:'2'},
                                  {key:'网银浏览',value:'3'},
                                  {key:'网点柜面',value:'4'},
                                  {key:'呼叫中心',value:'5'},
                                  {key:'微信公众号',value:'6'},
                                  {key:'其他渠道',value:'7'}
                                 ];
  public recommendManageList: any [];
  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router) { }

  ngOnInit() {
    //this.formGroup.
    this.onRefresh();
  }



  public onRefresh() {
    console.log("fresh data list");
    this.apiService.getRecommendManageList().subscribe(data => {
      this.recommendManageList = data.sort(x => 0.5 - Math.random())
    })
  }

  public toDetailPage(id:string){
     this.router.navigate(['/marketing/recommend-detail',id])
  }

}
