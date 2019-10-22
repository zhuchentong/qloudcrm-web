import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { ApiService as MarketingService } from 'projects/marketing/src/app/services/api.service'
// import { ApiService } from './../../../../../dashboard/src/app/services/dashboard.service';
import { ApiService as CustomerService } from 'projects/customer/src/app/services/api.service'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers:[ApiService]
})
export class ProductDetailComponent implements OnInit {
  public id
  public activityList:any = []
  public groupList:any = []
  public productDetaildata = []

  constructor(private route: ActivatedRoute, private router: Router,private apiServicemark:MarketingService,private apiServicecustomer:CustomerService,private apiServicepro:ApiService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')

    this.getProductDetail()

    this.apiServicemark.getActivityList().subscribe(data => {
      this.activityList = data
    })

    this.apiServicecustomer.getCustomerGroupList().subscribe(data => {
      this.groupList = data
    })

    this.apiServicepro.getProduct( this.id ).subscribe(data =>{
      this.productDetaildata = data
      console.log(JSON.stringify(this.productDetaildata))
    })
  }

  getProductDetail() {}
}
