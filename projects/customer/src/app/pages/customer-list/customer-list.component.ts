import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { SearchComponent } from '../../components/search/search.component'
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component'
import { ModalService } from '@app/shared/utils'
import { NetService, PageService } from '@app/core/http'
import customerJson from '../../../assets/json/customer.json'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [ModalService, PageService]
})
export class CustomerListComponent implements OnInit {
  public formGroup: FormGroup = this.fb.group({})
  public customerList: any = []
  constructor(private fb: FormBuilder, private modal: ModalService, public pageService: PageService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({ name: [''] })
    this.onRefresh()
  }

  public onRefresh() {
    this.customerList = customerJson
  }

  public search() {
    this.modal
      .open({
        title: '高级搜索',
        component: SearchComponent,
        data: {
          // algo: DTO.from(AlgoDTO, algo)
        }
      })
      .subscribe(() => {
        // this.updateDetail()
      })
  }

  public openDetail() {
    this.modal
      .open({
        title: '客户详情',
        component: CustomerDetailComponent,
        data: {}
      })
      .subscribe(() => {})
  }
}
