import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-customer-tag',
  templateUrl: './customer-tag.component.html',
  styleUrls: ['./customer-tag.component.scss'],
  providers: [ApiService]
})
export class CustomerTagComponent implements OnInit {
  public catalogList: any[] = []
  public tagList: any[] = []
  public hotList: any[] = []
  public newList: any[] = []
  public tagCloudList: any[] = []
  public wordCloudImg = require('../../../assets/images/image1.png')
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    require('echarts-wordcloud')
    this.getTagCatalogList()
    this.apiService.getCustomerTagList('tag').subscribe(list => {
      // 生成树形结构
      this.hotList = list
        .slice(0, 20)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)

      this.newList = list
        .slice(0, 20)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5)

      this.tagCloudList = list
        .slice(0, 20)
        .sort(() => 0.5 - Math.random())
        .map(x => x.name)

      console.log(this.tagCloudList)
    })
  }

  public onSelectTag(...a) {
    console.log(a)
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
}
