import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ApiService } from '../../services/api.service'
import { ModalService } from '@app/shared/utils'
import { SelectCreateComponent } from '../../components/select-create/select-create.component'
import { QlMessageService } from 'qloud-angular'
@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.css'],
  providers: [ModalService]
})
export class CustomerSelectComponent implements OnInit {
  public customerList: any[] = []
  public formGroup: FormGroup

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private modal: ModalService,
    private message: QlMessageService
  ) {
    this.formGroup = this.fb.group({
      startTime: [],
      endTime: [],
      status: [],
      name: []
    })
  }

  ngOnInit() {
    this.onRefresh()
  }

  public onRefresh() {
    this.apiService.getCustomerSelectList().subscribe(data => {
      this.customerList = data
    })
  }

  public onCreate() {
    this.modal
      .open({
        title: '申领申请',
        component: SelectCreateComponent
      })
      .subscribe(() => {
        this.message.success('客户申领提交成功')
      })
  }
}
