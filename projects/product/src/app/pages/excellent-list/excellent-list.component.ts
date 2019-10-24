import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-excellent-list',
  templateUrl: './excellent-list.component.html',
  styleUrls: ['./excellent-list.component.scss']
})
export class ExcellentListComponent implements OnInit {


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
