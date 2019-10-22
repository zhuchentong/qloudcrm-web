import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { Location } from '@angular/common'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: [ModalService,PageService]
})
export class EventListComponent implements OnInit {

  public formGroup: FormGroup = this.fb.group({})
  public dataList: any[] ;
  public eventType: any[];
  public channel: any[];
  public customerLevel: any[];

  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router) {
     this.apiService.getEventType().subscribe(data => {
      this.eventType = data;
    });
    this.apiService.getEventChannel().subscribe(data => {
      this.channel = data;
    });

    this.apiService.getCustomerLevel().subscribe(data => {
      this.customerLevel = data;
    });
  }

  ngOnInit() {
    this.onRefresh();
  }

  public onRefresh(){
    console.log('fresh data list');
    this.apiService.getEventList().subscribe(data => {
       this.dataList = data.sort(x => 0.5 - Math.random())
    });

  }

  public createItem(){
    this.router.navigate(['/event/event-create']);
  }

  public execute(){
    this.message.success('执行成功');
  }

  public cease(){
    this.message.success('暂停成功');
    this.onRefresh();
  }

  public showItem(){
    this.router.navigate(['/event/event-detail']);
  }
}
