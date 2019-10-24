import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-product-quality',
  templateUrl: './product-quality.component.html',
  styleUrls: ['./product-quality.component.scss']
})
export class ProductQualityComponent implements OnInit {

  public productList = []

  private getProductList() {
    this.apiService.getProductList('product').subscribe(list => {
      this.productList = list.splice(3,4)
    })
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getProductList()
  }

}
