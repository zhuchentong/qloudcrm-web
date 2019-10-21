import { Component, OnInit } from '@angular/core';
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder, FormGroup } from '@angular/forms'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.scss'],
  providers: [ModalService,PageService]
})
export class MonitorListComponent implements OnInit {
  public back:boolean = true;

  public dataList: any[];

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

  public formGroup: FormGroup = this.fb.group({})
  public onRefresh(){
    console.log("fresh data list");
    this.apiService.getActivationMonitorList().subscribe(data => {
      this.dataList = data.sort(x => 0.5 - Math.random())
    })

  }
}
