import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public catalogList: any[] = []
  public productList: any[] = []

  constructor() {}

  ngOnInit() {}

  public onCatalogChange(id) {}
}
