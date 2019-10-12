import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-tag-create-product',
  templateUrl: './tag-create-product.component.html',
  styleUrls: ['./tag-create-product.component.scss']
})
export class TagCreateProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submit() {
    return true
  }
}
