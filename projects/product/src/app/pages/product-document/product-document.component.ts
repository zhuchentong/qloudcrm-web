import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { Message } from '@angular/compiler/src/i18n/i18n_ast'
import { QlMessageService } from 'qloud-angular'

@Component({
  selector: 'app-product-document',
  templateUrl: './product-document.component.html',
  styleUrls: ['./product-document.component.scss']
})
export class ProductDocumentComponent implements OnInit {
  public currentItem: any = ''
  public itemHistory = ['']
  public currentList = []
  public documentList = [
    {
      name: '产品说明手册',
      type: 'document'
    },
    {
      name: '产品收益说明',
      type: 'document'
    },
    {
      name: '产品风险说明',
      type: 'document'
    },
    {
      name: '产品购买指南',
      type: 'document'
    }
  ]

  constructor(private message: QlMessageService, private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProductList('catalog', '').subscribe(data => {
      this.currentList = data
    })
  }

  getProductList() {}

  onOpenItem(item) {
    if (item.type !== 'product' && item.type !== 'catalog') {
      this.message.success('开始下载文档')
      return
    }

    this.itemHistory.push(this.currentItem)
    this.currentItem = item

    if (item.type === 'product') {
      this.currentList = this.documentList
    } else {
      this.apiService.getProductList(undefined, this.currentItem.id).subscribe(data => {
        this.currentList = data
      })
    }
  }

  onBack() {
    this.currentItem = this.itemHistory.pop()
    const type = this.currentItem ? undefined : 'catalog'
    const parent = this.currentItem ? this.currentItem.id : ''
    this.apiService.getProductList(type, parent).subscribe(data => {
      this.currentList = data
    })
  }
}
