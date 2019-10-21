import { Component, OnInit } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { ApiService } from '../../services/api.service'
import { SelectCustomerComponent } from '../../components/select-customer/select-customer.component'
import { SelectEventComponent } from '../../components/select-event/select-event.component'
import { SelectExploreComponent } from '../../components/select-explore/select-explore.component'
import { SelectInterestComponent } from '../../components/select-interest/select-interest.component'
import { SelectPruductComponent } from '../../components/select-pruduct/select-pruduct.component'
import { ApiService as ProductService } from 'projects/product/src/app/services/api.service'

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.scss'],
  providers: [ProductService]
})
export class ActivityCreateComponent implements OnInit {
  public customerList: any[] = [] // 客户列表
  public eventList: any[] = []
  public interestList: any[] = []
  public adList: any[] = []
  public productList: any[] = []
  public activityTarget = [
    {
      type: '',
      value: ''
    }
  ]

  public activityClaim = [
    {
      date: '',
      value: ''
    }
  ]

  public ladderList = []

  public activeTargetType = ['销售额', '存款额', '访问用户量', '激活用户量']

  constructor(private modal: ModalService, private apiService: ApiService, private productService: ProductService) {}

  ngOnInit() {}

  public addLadder(start, end) {
    this.ladderList.push({
      startTime: start.model,
      endTime: end.model,
      activityTarget: [],
      productList: [],
      interestList: []
    })
  }

  public getCustomerList() {
    this.apiService.getCustomerList().subscribe(data => {
      this.customerList = data
    })
  }

  public getEventList() {
    this.apiService.getEventList().subscribe(data => {
      this.eventList = data.slice(0, 3)
    })
  }

  public getAdList() {
    this.apiService.getEventList().subscribe(data => {
      this.adList = data.slice(0, 3)
    })
  }

  public getProductList() {
    this.productService.getProductList('product').subscribe(data => {
      this.productList = data.slice(0, 5)
    })
  }

  public getInterestList() {}

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

  public onSelectEvent() {
    this.modal
      .open({
        title: '添加事件',
        component: SelectEventComponent
      })
      .subscribe(data => {
        this.getEventList()
      })
  }

  public onSelectExplore() {
    this.modal
      .open({
        title: '添加探索用户',
        component: SelectExploreComponent
      })
      .subscribe(data => {
        this.getCustomerList()
      })
  }

  /**
   * 添加权益
   */
  public onSelectInterest() {
    this.modal
      .open({
        title: '添加权益',
        component: SelectInterestComponent
      })
      .subscribe(data => {
        this.getInterestList()
      })
  }

  public onSelectAd() {
    this.modal
      .open({
        title: '添加广告事件',
        component: SelectEventComponent
      })
      .subscribe(data => {
        this.getAdList()
      })
  }

  public onSelectProduct() {
    this.modal
      .open({
        title: '添加产品',
        component: SelectPruductComponent
      })
      .subscribe(data => {
        this.getProductList()
      })
  }
}
