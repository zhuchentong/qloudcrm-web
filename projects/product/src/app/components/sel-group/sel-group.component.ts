import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ModalRef } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { plainToClass } from 'class-transformer'
import { DictService } from '@app/shared/utils/dict.service'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-sel-group',
  templateUrl: './sel-group.component.html',
  styleUrls: ['./sel-group.component.scss'],
  providers: [ModalRef, ApiService]
})
export class SelGroupComponent implements OnInit {
  public groupList = []

  constructor(private modalRef: ModalRef, private fb: FormBuilder,private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getCustomerGroupList().subscribe(data => {
      this.groupList = data
    })
  }

}
