import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-template-filter',
  templateUrl: './template-filter.component.html',
  styleUrls: ['./template-filter.component.scss'],
  providers: [ApiService, QlMessageService]
})
export class TemplateFilterComponent implements OnInit {

  public templateList = [
    {
      "templateName":"基金达人",
      "creatTime":"2019-08-12",
      "institu":"兴业高新六路支行",
      "creator":"王文建",
      "scope":"支行共享",
      "templateState":"有效",
    },
    {
      "templateName":"金领一族",
      "creatTime":"2018-09-10",
      "institu":"兴业高新八路支行",
      "creator":"李谷一",
      "scope":"分行共享",
      "templateState":"有效",
    },
    {
      "templateName":"理财潜力族",
      "creatTime":"2019-08-12",
      "institu":"农业科技二路支行",
      "creator":"王丽",
      "scope":"支行共享",
      "templateState":"建设中",
    },  {
      "templateName":"投资小白理财",
      "creatTime":"2019-01-31",
      "institu":"招商丈八北路支行",
      "creator":"陈祥",
      "scope":"私有",
      "templateState":"有效",
    }
  ]

  constructor(private apiService: ApiService, private modal: ModalService, private message: QlMessageService) { }

  ngOnInit() {
    this.apiService.getTemplatelistList().subscribe(data => {
      this.templateList = data
    })
  }

}
