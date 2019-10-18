import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder } from '@angular/forms'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-recommend-detial',
  templateUrl: './recommend-detial.component.html',
  styleUrls: ['./recommend-detial.component.scss'],
  providers: [ModalService, PageService]
})
export class RecommendDetialComponent implements OnInit {
  public back: boolean = true
  constructor(
    public location: Location,
    private apiService: ApiService,
    private fb: FormBuilder,
    public modal: ModalService,
    public pageService: PageService,
    private message: QlMessageService,
    private router: Router
  ) {}

  ngOnInit() {}
}
