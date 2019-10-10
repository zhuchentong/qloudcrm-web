import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import customerJson from '../../../assets/json/customer.json'
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public formGroup: FormGroup
  public customerList: any = []
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({ name: [''] })
    this.onRefresh()
  }

  public onRefresh() {
    this.customerList = customerJson
  }
}
