import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { ApiService } from '../../../services/api.service'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'

@Component({
  selector: 'app-params-quota',
  templateUrl: './params-quota.component.html',
  styleUrls: ['./params-quota.component.css']
})
export class ParamsQuotaComponent implements OnInit {
  public targetTreeList: any[] = []

  public paramsList: any[] = []
  public isShowAdd: boolean = false
  public nodeTreeChecked: any = {}
  public menuIndex: number = 0
  public addOrEdit: string = 'add'
  public paramData: any = {
    name: '',
    code: '',
    description: '',
    createTime: '',
    data: ''
  }
  constructor(public apiService: ApiService, public modal: ModalService, public message: QlMessageService) {}
  @ViewChild('addParams', { static: false })
  public addParamsForm: ViewContainerRef

  ngOnInit() {
    this.getDefaultList()
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

  getDefaultList() {
    this.apiService.getQuotaParamsTypeList('catalog').subscribe(list => {
      // 添加label字段
      list.forEach((x: any) => {
        x.label = x.name
      })

      // 生成树形结构
      this.targetTreeList = this.generateCatalogTree(list)

      // 默认选择第一条
      if (this.targetTreeList.length > 0) {
        const firstcfg = this.targetTreeList[0]
        this.onMenuIndexChange(firstcfg.id)
      }
    })
  }

  private getTagList(parent) {
    this.apiService.getQuotaParamsTypeList('tag', parent).subscribe(list => {
      this.paramsList = list
    })
  }

  // 左侧树的选中
  public onCatalogChange({ action, treeNodeID }) {
    if (action === 'click') {
      this.nodeClickTreeData(treeNodeID)
      this.isShowAdd = true
    }
  }

  // 左侧menu的选中
  public onMenuIndexChange(treeNodeID) {
    this.menuIndex = treeNodeID
    this.nodeClickTreeData(treeNodeID)
    this.isShowAdd = true
  }

  public deleteParam(data) {
    const list = this.paramsList.filter(v => v.id !== data.id)
    this.paramsList = list
  }

  nodeClickTreeData(treeNodeID) {
    const checkCfg = this.targetTreeList.filter(item => item.id === treeNodeID)
    this.nodeTreeChecked = checkCfg.length > 0 ? checkCfg[0] : {}
    this.paramData = { ...this.paramData, data: this.nodeTreeChecked.id }
    this.getTagList(treeNodeID)
  }

  public addOrUpdateParam(type, values) {
    this.addOrEdit = type
    const { data } = this.paramData

    this.paramData = { ...values, data }

    const cfgMap = {
      add: {
        title: '创建指标参数',
        msg: '创建成功'
      },
      edit: {
        title: '编辑指标参数',
        msg: '编辑成功'
      }
    }
    this.modal
      .open({
        title: cfgMap[type].title,
        size: 'large',
        component: this.addParamsForm
      })
      .subscribe(() => {
        this.message.success(cfgMap[type].msg)

        const { name, code, createTime, data: parent, description, id } = this.paramData

        const params = {
          name,
          code,
          createTime,
          parent,
          description,
          data: this.getParentNameById(parent),
          id: type === 'add' ? code : id,
          user: '岳一鹏'
        }
        if (type === 'add') {
          this.paramsList.push(params)
        } else {
          const editIndex = this.paramsList.findIndex(item => item.id === id)

          this.paramsList.splice(editIndex, 1, params)
        }
      })
  }
  private getParentNameById(parent) {
    const nodeList = this.targetTreeList.filter(v => v.id === parent)
    if (nodeList.length > 0) {
      return nodeList[0].name
    }
    return ''
  }
}
