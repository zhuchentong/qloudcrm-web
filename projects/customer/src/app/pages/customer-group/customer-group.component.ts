import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ApiService } from '../../services/api.service'
import { Router } from '@angular/router'
import { QlMessageService } from 'qloud-angular'
import { plainToClass } from 'class-transformer'
import { DictService } from '@app/shared/utils/dict.service'
import groupEditForm from '../../../assets/formio/customer-group-edit.json'
import { ModalService } from '@app/shared/utils'
@Component({
  selector: 'app-customer-group',
  templateUrl: './customer-group.component.html',
  styleUrls: ['./customer-group.component.css'],
  providers: [ApiService, ModalService]
})
export class CustomerGroupComponent implements OnInit {
  @ViewChild('groupItemEdit', { static: true })
  private groupItemEditTemp: TemplateRef<any>

  public formGroup: FormGroup
  public groupList: any[] = []
  public edidflag: any = ''

  // 弹框
  public groupForm = groupEditForm
  public groupFormData = {
    data: {}
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private modal: ModalService,
    private message: QlMessageService
  ) {}

  ngOnInit() {
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

  public editGroup(data) {
    this.groupFormData.data = data
    this.modal
      .open({
        title: '编辑分组',
        component: this.groupItemEditTemp
      })
      .subscribe(() => {
        this.message.success('修改成功')
      })
  }
}
