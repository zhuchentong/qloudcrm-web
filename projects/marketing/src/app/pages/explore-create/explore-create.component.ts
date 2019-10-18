import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { ApiService } from '../../services/api.service'
import { FormGroup, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-explore-create',
  templateUrl: './explore-create.component.html',
  styleUrls: ['./explore-create.component.scss'],
  providers: [ApiService, QlMessageService]
})
export class ExploreCreateComponent implements OnInit {

  @ViewChild('delCustomer', { static: true })
  private delCustomerTemp: TemplateRef<any>

  public formGroup: FormGroup = this.fb.group({})

  public customerList: any[] = []

  constructor(private fb: FormBuilder, private apiService: ApiService, private modal: ModalService, private message: QlMessageService) { }

  ngOnInit() {
    this.apiService.getcustomerDelList().subscribe(data => {
      this.customerList = data.sort(x => 0.5 - Math.random())
    })
  }

  public delCustomerFun(){
    this.modal
    .open({
      size: 'huge',
      title: '选择剔除目标客户',
      component: this.delCustomerTemp,
      data: {}
    })
    .subscribe(() => {
    })
  }

  public closeFun(){
    this.modal.close()
  }

}
