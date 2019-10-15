
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-customer-assets',
  templateUrl: './customer-assets.component.html',
  styleUrls: ['./customer-assets.component.css'],
  providers: [ApiService]
})
export class CustomerAssetsComponent implements OnInit {
  @ViewChild('searchList', { static: true })
  private searchListTemp: TemplateRef<any>
  public dataassets =[]
  public customerList = []
  public seltimes = [
    { value: '一周内', label: '一周内' },
    { value: '一月内', label: '一月内' },
    { value: '三月内', label: '三月内' },
    { value: '半年内', label: '半年内' },
    { value: '一年内', label: '一年内' }
  ]
  constructor(private apiService: ApiService,private modal: ModalService, private message: QlMessageService) {}

  ngOnInit() {
    this.apiService.getcustomerAssetsList().subscribe(data => {
      this.dataassets = data
    })

    this.apiService.getCustomerList().subscribe(data => {
      this.customerList = data.sort(x => 0.5 - Math.random())
    })
  }

  public queryCustomer(){
    this.modal
    .open({
      title: '客户列表',
      component: this.searchListTemp
    })
    .subscribe(() => {
      this.message.success('sucess')
    })
  }
}
