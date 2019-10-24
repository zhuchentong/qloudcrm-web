import { Component, OnInit } from '@angular/core'
import { ApiService as CustomerService } from 'projects/customer/src/app/services/api.service'
@Component({
  selector: 'app-financial-plan',
  templateUrl: './financial-plan.component.html',
  styleUrls: ['./financial-plan.component.scss']
})
export class FinancialPlanComponent implements OnInit {
  public customerList: any[] = []

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomerList()
  }

  getCustomerList() {
    this.customerService.getCustomerList().subscribe(data => {
      this.customerList = data
    })
  }
}
