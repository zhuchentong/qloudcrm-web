import { Component, OnInit } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { ApiService } from '../../services/api.service'
import { SelectCustomerComponent } from '../../components/select-customer/select-customer.component'

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.scss']
})
export class ActivityCreateComponent implements OnInit {
  public customerList: any[] = [] // 客户列表

  constructor(private modal: ModalService, private apiService: ApiService) {}

  ngOnInit() {}

  public getCustomerList() {
    this.apiService.getCustomerList().subscribe(data => {
      this.customerList = data
    })
  }
  public onSelectCustomer() {
    this.modal
      .open({
        title: '添加客户',
        size: 'huge',
        component: SelectCustomerComponent
      })
      .subscribe(data => {})
  }
}
