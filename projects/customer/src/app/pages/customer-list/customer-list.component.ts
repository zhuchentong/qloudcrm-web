import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { SearchComponent } from '../../components/search/search.component'
// import { CustomerDetailComponent } from '../customer-detail/customer-detail.component'
import { ModalService } from '@app/shared/utils'
import { NetService, PageService } from '@app/core/http'
import { ApiService } from '../../services/api.service'
import { QlMessageService } from 'qloud-angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [ModalService, PageService]
})
export class CustomerListComponent implements OnInit {
  public formGroup: FormGroup = this.fb.group({})
  public customerList: any[] = []
  public groupList: any[] = []
  public showGroup = false

  @ViewChild('addGroup', { static: true })
  public addGroupTemplate: ViewContainerRef

  @ViewChild('changeGroup', { static: true })
  public changeGroupTemplate: ViewContainerRef

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    public modal: ModalService,
    public pageService: PageService,
    private message: QlMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({ name: [''] })
    this.onRefresh()
  }

  public onRefresh() {
    this.apiService.getCustomerGroupList().subscribe(data => {
      this.groupList = data
    })

    this.apiService.getCustomerList().subscribe(data => {
      this.customerList = data.sort(x => 0.5 - Math.random())
    })
  }

  public search() {
    this.modal
      .open({
        size: 'large',
        title: '高级搜索',
        component: SearchComponent,
        data: {}
      })
      .subscribe(() => {
        this.onRefresh()
        this.message.success(`共查询到${this.customerList.length}条结果`)
      })
  }

  public onCheckChange(selection) {
    this.showGroup = selection.length > 0
  }

  public onCreateGroup() {
    this.modal
      .open({
        title: '创建分组',
        size: 'large',
        component: this.addGroupTemplate
      })
      .subscribe(() => {
        this.message.success('创建成功')
        this.router.navigateByUrl('/customer/customer-group')
      })
  }

  public onChangeGroup() {
    this.modal
      .open({
        title: '移动分组',
        size: 'large',
        component: this.changeGroupTemplate
      })
      .subscribe(() => {
        this.message.success('移动成功')
      })
  }
}
