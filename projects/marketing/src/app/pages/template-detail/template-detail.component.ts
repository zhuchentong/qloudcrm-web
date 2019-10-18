import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { ApiService } from '../../services/api.service'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.scss'],
  providers: [ApiService, QlMessageService]
})
export class TemplateDetailComponent implements OnInit {

  public tagList = []

  constructor( private fb: FormBuilder, private apiService: ApiService, private modal: ModalService, private message: QlMessageService) { }

  ngOnInit() {

    this.apiService.getCustomerTagList().subscribe(list => {
      // 生成树形结构
      this.tagList = list.splice(1,6)
    })
  }


}
