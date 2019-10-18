import { Component, OnInit } from '@angular/core';
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder } from '@angular/forms'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-equities-create',
  templateUrl: './equities-create.component.html',
  styleUrls: ['./equities-create.component.scss'],
  providers: [ModalService,PageService]
})
export class EquitiesCreateComponent implements OnInit {
  public back:boolean = true;
  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router) { }

  ngOnInit() {
  }

}
