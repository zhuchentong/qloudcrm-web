import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'


@Component({
  selector: 'app-customer-assign',
  templateUrl: './customer-assign.component.html',
  styleUrls: ['./customer-assign.component.css'],
  providers: [ApiService]

})
export class CustomerAssignComponent implements OnInit {

  public dataList = []

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getcuctomerAssignList().subscribe(data => {
      this.dataList = data
    })
  }

}
