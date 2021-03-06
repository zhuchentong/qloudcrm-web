import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { ModalRef } from '@app/shared/utils'
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  providers: [ApiService, ModalRef]
})
export class TagComponent implements OnInit {
  public catalogList: any[] = []
  public tagList: any[] = []

  constructor(private apiService: ApiService, public modalRef: ModalRef) {}

  ngOnInit() {
    this.getTagCatalogList()
  }

  private getTagCatalogList() {
    this.apiService.getCustomerTagList('catalog').subscribe(list => {
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

  /**
   * 选择标签类型改变
   * @param param0
   */
  public onCatalogChange({ action, treeNodeID }) {
    if (action === 'click') {
      this.getTagList(treeNodeID)
    }
  }

  /**
   * 获取标签列表
   * @param parent
   */
  private getTagList(parent) {
    this.apiService.getCustomerTagList('tag', parent).subscribe(list => {
      // 生成树形结构
      this.tagList = list
    })
  }

  public onRefresh(){
    this.modalRef.close()
  }
}
