import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ApiService } from '../../services/api.service'
import { Router } from '@angular/router'
import { QlMessageService } from 'qloud-angular'
import { plainToClass } from 'class-transformer'
import { DictService } from '@app/shared/utils/dict.service'
import { group_Form } from './group_form'
@Component({
  selector: 'app-customer-group',
  templateUrl: './customer-group.component.html',
  styleUrls: ['./customer-group.component.css'],
  providers: [ApiService]
})
export class CustomerGroupComponent implements OnInit {
  public formGroup: FormGroup
  public groupList: any[] = []
  public edidflag: any = ''

  // 弹框
  public group_Form: any = ''
  public groupFormData = {
    data: {}
  }
  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.group_Form = group_Form
    this.formGroup = this.fb.group({
      name: [''],
      state: ['']
    })

    this.onRefresh()
  }

  public onRefresh() {
    this.apiService.getCustomerGroupList().subscribe(data => {
      this.groupList = data
    })
  }

  public editGroup() {
    this.edidflag = true
    this.groupFormData = {
      data: {
        code: 'REU7823',
        name: '高消费组',
        desc: '月均AUM大于20000，消费大于15000',
        num: '167',
        creator: '张东',
        state: '开启',
        time: '2019-08-13 12:00 PM'
      }
    }
  }
}
