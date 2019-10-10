import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-customer-group',
  templateUrl: './customer-group.component.html',
  styleUrls: ['./customer-group.component.css'],
  providers: [ApiService]
})
export class CustomerGroupComponent implements OnInit {
  public formGroup: FormGroup
  public groupList: any[] = []

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

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
}
