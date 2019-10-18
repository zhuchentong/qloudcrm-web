import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { ModalRef } from '@app/shared/utils'
@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.scss']
})
export class SelectCustomerComponent implements OnInit {
  public customerList: any[] = []

  constructor(private apiService: ApiService, public modalRef: ModalRef) {}

  ngOnInit() {
    this.onRefresh()
  }

  onRefresh() {
    this.apiService.getCustomerList().subscribe(data => {
      this.customerList = data.sort(() => Math.random() - 0.5)
    })
  }
}
