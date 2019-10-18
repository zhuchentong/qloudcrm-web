import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder } from '@angular/forms'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],
  providers: [ModalService,PageService]
})
export class ChannelListComponent implements OnInit {
  private back:boolean = true;
  public channelList:  any[] = [];
  public showGroup = false
  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router) { }

  ngOnInit() {
    this.initialTableData();
  }

  public onCheckChange(selection) {
    this.showGroup = selection.length > 0
  }

  public initialTableData() {
    this.apiService.getMarketChannelOpertion().subscribe(data => {
      this.channelList = data.sort(x => 0.5 - Math.random())
    })
  }
}
