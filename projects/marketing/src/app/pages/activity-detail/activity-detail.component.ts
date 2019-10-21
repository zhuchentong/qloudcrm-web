import { Component, OnInit } from '@angular/core'
import { ApiService as ProductService } from 'projects/product/src/app/services/api.service'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
  providers: [ProductService]
})
export class ActivityDetailComponent implements OnInit {
  public customerList: any[] = [] // 客户列表
  public eventList: any[] = []
  public interestList: any[] = []
  public adList: any[] = []
  public productList: any[] = []

  public ladderList = [
    {
      time: '2019-10-01 - 2019-10-05',
      targetList: [
        {
          type: '销售额',
          value: '100,000.00元'
        },
        {
          type: '客户访问量',
          value: '200,000次'
        }
      ],
      productList: [],
      interestList: []
    }
  ]

  constructor(private apiService: ApiService, private productService: ProductService) {}

  ngOnInit() {
    this.getAdList()
    this.getCustomerList()
    this.getEventList()
    this.getInterestList()
    this.getProductList()
    this.getLadderList()
  }

  public getLadderList() {
    this.getProductList(this.ladderList[0])
    this.getInterestList(this.ladderList[0])
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

  public getProductList(target?) {
    this.productService.getProductList('product').subscribe(data => {
      const source = target || this
      source.productList = data.slice(0, 5)
    })
  }

  public getInterestList(target?) {
    this.apiService.getEquitiesList().subscribe(data => {
      const source = target || this
      source.interestList = data.slice(0, 3)
    })
  }
}
