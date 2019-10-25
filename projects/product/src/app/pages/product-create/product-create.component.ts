import { ModalService } from '@app/shared/utils'
import { ApiService } from '../../services/api.service'
import { Router } from '@angular/router'
import { QlMessageService } from 'qloud-angular'
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { NetService, PageService } from '@app/core/http'
import { TagComponent } from '../../components/tag/tag.component'
import { SelectCustomerComponent } from '../../components/select-customer/select-customer.component'
import { SelGroupComponent } from '../../components/sel-group/sel-group.component'
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  providers: [ModalService, PageService,ApiService]
})
export class ProductCreateComponent implements OnInit {
  public customerList = []
  public customerTag = []
  public customerGroup = []
  constructor(
    private fb: FormBuilder,
    public modal: ModalService,
    public pageService: PageService,
    private message: QlMessageService,
    private apiService:ApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  public getCustomerList() {
    this.apiService.getCustomerList().subscribe(data => {
      this.customerList = data
    })
  }

  public getCustomerTag(){
    this.apiService.getCustomerTagList().subscribe(data=>{
      this.customerTag = data.splice(16,4)
      console.log(this.customerTag)
    })
  }

  public getCustomerGroup(){
    this.apiService.getCustomerGroupList().subscribe(data=>{
      this.customerGroup = data
      console.log(this.customerGroup)
    })
  }



  public onSelectCustomer() {
    this.modal
      .open({
        title: '添加客户',
        size: 'huge',
        component: SelectCustomerComponent
      })
      .subscribe(data => {
        this.getCustomerList()
      })
  }

  public onSelectTag() {
    this.modal
      .open({
        title: '选择标签',
        size: 'huge',
        component: TagComponent
      })
      .subscribe(data => {
        this.getCustomerTag()
      })
  }

  public onSelectGroup(){
    this.modal
      .open({
        title: '选择分组',
        size: 'huge',
        component: SelGroupComponent
      })
      .subscribe(data => {
        this.getCustomerGroup()
      })
  }
}
