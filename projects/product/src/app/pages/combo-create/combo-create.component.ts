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
import { SelectPruductComponent } from '../../components/select-pruduct/select-pruduct.component'


@Component({
  selector: 'app-combo-create',
  templateUrl: './combo-create.component.html',
  styleUrls: ['./combo-create.component.scss'],
  providers: [ModalService, PageService]
})
export class ComboCreateComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public modal: ModalService,
    public pageService: PageService,
    private message: QlMessageService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {}

  public onSelectCustomer() {
    this.modal
      .open({
        title: '添加客户',
        size: 'huge',
        component: SelectCustomerComponent
      })
      .subscribe(data => {})
  }

  public onSelectTag() {
    this.modal
      .open({
        title: '选择标签',
        size: 'huge',
        component: TagComponent
      })
      .subscribe(data => {})
  }

  public onSelectGroup(){
    this.modal
      .open({
        title: '选择分组',
        size: 'huge',
        component: SelGroupComponent
      })
      .subscribe(data => {})
  }

  public onSelectProduct(){
    this.modal
      .open({
        title: '选择产品',
        size: 'huge',
        component: SelectPruductComponent
      })
      .subscribe(data => {})
  }
}
