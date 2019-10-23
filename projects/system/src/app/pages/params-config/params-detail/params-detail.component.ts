import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core'
import { ApiService } from '../../../services/api.service'
import { QlMessageService } from 'qloud-angular'
import { ModalService } from '@shared/utils'

@Component({
  selector: 'app-params-detail',
  templateUrl: './params-detail.component.html',
  styleUrls: ['./params-detail.component.scss'],
  providers: [ApiService]
})
export class ParamsDetailComponent implements OnInit {
  @Input() flag = '';
  paramName: string;
  paramsList: any = [];
  catalogList: any;
  isEdit:boolean;
  paramData: any = {
    name:'',
    code:'',
    data:'',
    createTime:'',
    description:''
  }
  checkedTreeData: any;
  @ViewChild('addParamView', { static: true })
  public addParamView: ViewContainerRef
  isShowAdd: boolean;
  constructor(private apiService: ApiService,
              public modal: ModalService,
              private message: QlMessageService,
              ) { }

  ngOnInit() {
    if(this.flag === 'single') {
      //this.getSingleParamType();
      this.apiService.singleParamsTypeList('tag').subscribe(list => {
        // 生成树形结构
        this.paramsList = list;
      })
    } else if(this.flag === 'mup') {
      this.getMupParamType();
    } else if (this.flag === 'sys') {
      this.apiService.sysParamsTypeList('catalog').subscribe(list => {
        // 添加label字段
        list.forEach((x: any) => {
          x.label = x.name
        })
        // 生成树形结构
        this.catalogList = this.generateCatalogTree(list)
      })
    } else {
      this.getParamTypeData();
    }
  }
  private getSingleParamType() {
    this.apiService.singleParamsTypeList('catalog').subscribe(list => {
      // 添加label字段
      list.forEach((x: any) => {
        x.label = x.name
      })
      // 生成树形结构
      this.catalogList = this.generateCatalogTree(list)
    })
  }
  private getMupParamType() {
    this.apiService.mupParamsTypeList('catalog').subscribe(list => {
      // 添加label字段
      list.forEach((x: any) => {
        x.label = x.name
      })
      // 生成树形结构
      this.catalogList = this.generateCatalogTree(list)
    })
  }
  keyup() {
    if(this.paramName===''){
      this.apiService.mupParamsTypeList('catalog').subscribe(list => {
        // 添加label字段
        list.forEach((x: any) => {
          x.label = x.name
        })
        // 生成树形结构
        this.catalogList = this.generateCatalogTree(list);
      })
    } else {
      this.apiService.mupParamsTypeList('catalog').subscribe(list => {
        // 添加label字段
        let arr = [];
        list.forEach((x: any) => {
          x.label = x.name
          if(x.name.indexOf(this.paramName)>-1) {
            arr.push(x)
          }
        })
        // 生成树形结构
        this.catalogList = this.generateCatalogTree(arr);
      })
    }
  }
  private getParamTypeData() {
    this.apiService.getParamsTypeData('catalog').subscribe(list => {
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
  recodeClickTreeData(treeNodeID) {
    this.catalogList.forEach(item=>{
      if(item.id === treeNodeID){
        this.checkedTreeData = item;
      }
    })
  }
  /**
   * 选择参数类型改变
   * @param param0
   */
  public onCatalogChange({ action, treeNodeID }) {
    if (action === 'click') {
      this.recodeClickTreeData(treeNodeID);
      this.isShowAdd = true;
      if(this.flag==='single') {
        this.apiService.singleParamsTypeList('tag', treeNodeID).subscribe(list => {
          // 生成树形结构
          this.paramsList = list;
        })
      } else if(this.flag ==='mup') {
        this.apiService.mupParamsTypeList('tag', treeNodeID).subscribe(list => {
          // 生成树形结构
          this.paramsList = list;
        })
      } else if (this.flag ==='sys') {
        this.apiService.sysParamsTypeList('tag', treeNodeID).subscribe(list => {
          // 生成树形结构
          this.paramsList = list;
        })
      }else {
        this.getTagList(treeNodeID)
      }
    }
  }
  /**
   * 获取标签列表
   * @param parent
   */
  private getTagList(parent) {
    this.apiService.getParamsTypeData('tag', parent).subscribe(list => {
      console.log('222222222',list)
      // 生成树形结构
      this.paramsList = list;
    })
  }
  addParam() {
    this.clearParamData();
    this.paramData['name'] = this.checkedTreeData['name'];
    this.paramData['code'] = this.checkedTreeData['code'];
    this.paramData['description'] = this.checkedTreeData['description'];
    this.isEdit = false;
    this.modal
      .open({
        title: '参数创建',
        size: 'large',
        component: this.addParamView
      })
      .subscribe(() => {
        this.message.success('创建成功');
        this.paramData['user'] = '王力';
        this.paramsList.push(this.paramData);
      })
  }
  updateParam(data) {
    this.clearParamData();
    this.paramData = data;
    this.isEdit = true;
    this.modal
      .open({
        title: '参数修改',
        size: 'large',
        component: this.addParamView
      })
      .subscribe(() => {
        this.message.success('修改成功');
        this.paramsList.forEach((item,index)=> {
          if(item['id'] === data['id']) {
            const json = {
              id: data['id'],
              name: this.paramData.name,
              code: this.paramData.code,
              data: this.paramData.data,
              description: this.paramData.description,
              createTime: this.paramData.createTime,
              user: this.paramData.user,
            }
            this.paramsList.splice(index,1,json );
          }
        })
      })
  }
  clearParamData() {
    this.paramData = {
      name:'',
      code:'',
      value:'',
      createTime:'',
      description:''
    }
  }
}
