import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {
  public customerList: any[] = []
  public formGroup: FormGroup
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private modal: ModalService,
    private message: QlMessageService
  ) {
    this.formGroup = fb.group({})
  }

  ngOnInit() {
    this.onRefresh()
  }

  public onRefresh() {
    this.apiService.getCustomerList().subscribe(data => {
      this.customerList = data.sort(x => 0.5 - Math.random())
    })
  }
}
