import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-customer-level',
  templateUrl: './customer-level.component.html',
  styleUrls: ['./customer-level.component.css'],
  providers: [ApiService, QlMessageService]
})
export class CustomerLevelComponent implements OnInit {

  @ViewChild('searchList', { static: true })
  private searchListTemp: TemplateRef<any>

  public customerList = []
  public seltimes = [
    {value:'近一个月',label:'近一个月'},
    {value:'近三个月',label:'近三个月'},
    {value:'近六个月',label:'近六个月'},
    {value:'近一年',label:'最近一年'}
  ]

  public customerlevels = []

  public customerType =[{'ctnum':'212','ctup':'32','ctdown':'54','ctwealth':'19','ctbank':'9','ctplatinum':'6','ctgold':'11','ctpotential':'45','ctordinary':'107'}]

  constructor(private apiService: ApiService,private modal: ModalService, private message: QlMessageService) { }

  ngOnInit() {
    this.apiService.getcustomerLevelList().subscribe(data => {
      this.customerlevels = data
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
