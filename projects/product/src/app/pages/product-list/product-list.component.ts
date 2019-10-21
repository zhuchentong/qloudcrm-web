import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public catalogList: any[] = []
  public productList: any[] = []

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getProductCatalogList()
  }

  /**
   * 选择标签类型改变
   * @param param0
   */
  public onCatalogChange({ action, treeNodeID }) {
    if (action === 'click') {
      this.getProductList(treeNodeID)
    }
  }

  /**
   * 获取标签列表
   * @param parent
   */
  private getProductList(parent) {
    this.apiService.getProductList('product', parent).subscribe(list => {
      // 生成树形结构
      this.productList = list
    })
  }

  private getProductCatalogList() {
    this.apiService.getProductList('catalog').subscribe(list => {
      // 添加label字段
      list.forEach((x: any) => {
        x.label = x.name
      })
      // 生成树形结构
      this.catalogList = this.generateCatalogTree(list)
    })
  }

  private generateCatalogTree(list) {
    const root = list.filter(x => !x.parent)

    const depth = node => {
      const children = list.filter(x => x.parent === node.id)

      if (children && children.length) {
        node.children = children
        node.children.forEach(depth)
      } else {
        node.leaf = true
      }
      return node
    }

    return root.map(depth)
  }
}
