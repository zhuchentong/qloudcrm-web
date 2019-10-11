import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css'],
  providers: [ApiService]
})
export class CustomerViewComponent implements OnInit {
  public formGroup: FormGroup
  public customerList

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      code: [''],
      name: [''],
      sex: [''],
      age: [''],
      manager: [''],
      dayAUM: [''],
      nowAUM: [''],
      content: ['']
    })

    this.onRefresh()
  }

  public onRefresh() {
    this.apiService.getCustomerEventList().subscribe(data => {
      this.customerList = data
    })
  }

  public onExportExcel() {}
}
