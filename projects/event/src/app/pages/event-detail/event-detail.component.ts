import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder } from '@angular/forms'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [ModalService, PageService]
})
export class EventDetailComponent implements OnInit {
  public eventDetial

  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router,
              private activeRouter: ActivatedRoute) {
  }

  ngOnInit() {
    // this.itemId= this.activeRoute.snapshot.params['id'];
    this.eventDetial = {
      eventType: '汇款',
      eventName: '理财产品到期',
      statisticBeginTime: '2019-10-01',
      statisticEndTime: '2019-10-30',
      customerDeed: '交办',
      trigCondition: '10万~15万',
      tradeAmount: '12万',
      tradeArea: '成都',
      traggerChannel:[{url:'https://qloudbank/store/item/002'},
        {url:'https://qloudbank/store/item/003'},
        {url:'https://qloudbank/store/item/004'},
        {url:'https://qloudbank/store/item/005'},
        {url:'https://qloudbank/store/item/006'},
        {url:'https://qloudbank/store/item/007'}
                     ],
      customerTagsAttribute:[{tag:'标签属性1'},
        {tag:'标签属性2'},
        {tag:'标签属性3'},
        {tag:'标签属性4'},
        {tag:'标签属性5'}
        ]
    }
  }

}
