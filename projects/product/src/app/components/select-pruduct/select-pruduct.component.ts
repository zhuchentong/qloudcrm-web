import { Component, OnInit } from '@angular/core'
import { ApiService } from 'projects/product/src/app/services/api.service'
import { ModalRef } from '@app/shared/utils'

@Component({
  selector: 'app-select-pruduct',
  templateUrl: './select-pruduct.component.html',
  styleUrls: ['./select-pruduct.component.scss'],
  providers: [ModalRef]
})
export class SelectPruductComponent implements OnInit {
  public catalogList: any[] = []
  public productList: any[] = []

  constructor(private apiService: ApiService, public modalRef: ModalRef) {}

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
