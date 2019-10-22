import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'

import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { plainToClass } from 'class-transformer'
import { DictService } from '@app/shared/utils/dict.service'

@Component({
  selector: 'app-approval-list',
  templateUrl: './approval-list.component.html',
  styleUrls: ['./approval-list.component.scss']
})
export class ApprovalListComponent implements OnInit {
  public activityList: any[] = []
  constructor(private apiService: ApiService, public modal: ModalService, private message: QlMessageService) {}

  @ViewChild('statistlook', { static: true })
  private statistlookTemp: TemplateRef<any>

  ngOnInit() {
    this.getActivityList()
  }

  getActivityList() {
    this.apiService.getActivityList().subscribe(data => {
      this.activityList = data.slice(0, 1)
    })
  }

  public actiityStatis() {
    this.modal
      .open({
        title: '活动统计',
        component: this.statistlookTemp
      })
      .subscribe(() => {
        this.message.success('sucess')
      })
  }
}
