import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { Location } from '@angular/common'
import { ApiService } from '../../../../../marketing/src/app/services/api.service'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: [ModalService,PageService]
})
export class EventListComponent implements OnInit {

  public formGroup: FormGroup = this.fb.group({})
  public dataList: any[] ;

  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router) { }

  ngOnInit() {
  }

  public onRefresh(){
    console.log('fresh data list');
    this.apiService.getActivationMonitorList().subscribe(data => {
      // this.dataList = data.sort(x => 0.5 - Math.random())
    })

  }

  public toDetail(){
    this.router.navigate(['']);
  }
}
