import { Component, OnInit,Output,EventEmitter, Input, ViewChild, ViewContainerRef, ElementRef } from '@angular/core'
import { ApiService } from '../../../services/api.service'
import { ModalService } from '@shared/utils'
import { QlMessageService } from 'qloud-angular'
import { Router } from '@angular/router'
import { QlTree, UserSafeHooks } from 'qloud-angular/package/tree/tree'

@Component({
  selector: 'app-roles-detail',
  templateUrl: './roles-detail.component.html',
  styleUrls: ['./roles-detail.component.scss'],
  providers: [ApiService,ModalService]
})
export class RolesDetailComponent implements OnInit {
  @Input() flag: string;
  @Output() type = new EventEmitter<any>();
  @Output() roleManage = new EventEmitter<any>();
  rolesList: any = [];
  roleTypeSelect: any;
  roleTypeEdit: boolean;
  roleStatus: any = [
    {
      label:'使用',
      value:1
    },{
      label:'暂停',
      value:2
    }
  ]
  @Input() roleType: any = [{
    label:'业务角色',
    value:1
  },{
    label:'管理角色',
    value:2
  },{
    label:'职务角色',
    value:3
  }]
  rolesTypeData: any = {
    rolesType:'',
    rolesStatus: '',
    rolesCreateTime: '',
    rolesDesc: '',
    roleType: ''
  };
  nodeData = [];
  rolesAuthList = [];
  userAuthList = [];
  constructor(private apiService: ApiService,
  private message: QlMessageService,
  private router: Router,
  public modal: ModalService,
  ) { }
  @ViewChild('addRoles', { static: true })
  public addRoles: ViewContainerRef
  @ViewChild('addRolesManage', { static: true })
  public addRolesManage: ViewContainerRef
  @ViewChild('rolesAuth', { static: true })
  public rolesAuth: ViewContainerRef
  @ViewChild('tree', { static: false })
  tree: QlTree
  ngOnInit() {
    if(this.flag === 'roleType') {
      this.getRolesTypeList();
      this.type.emit(this.roleType);
    } else if(this.flag === 'role') {
      this.getRolesList();
    }
  }
  private getAuthCatalogList() {
    this.apiService.getRolesAuth().subscribe(list => {
      // 添加label字段
      list.forEach((x: any) => {
        x.label = x.name;
      })
      // 生成树形结构
      this.rolesAuthList = this.generateCatalogTree(list)
    })
  }
  onCatalogChange(data) {
    if(data.action==='checkbox') {
      console.log('data',data);
      if(data['checked']) {
        //从左侧添加到右侧
        this.addUserAuth(data);

      } else {
        //从右侧去掉
        this.removeTreeData(data);
      }
    }
  }
  removeTreeData(data) {
    let list = this.userAuthList;
    this.userAuthList = [];
    this.dropUserAuth(list,data['treeNodeID']);
    let node = [];
    this.handleTreeData(list,node);
    this.nodeData = node;
    setTimeout(() => {
      this.userAuthList = list;
    },100)
  }

  onUserCatalogChange(data) {
    //从右侧去掉
   this.removeTreeData(data);
   //左侧选中设置为不选中
    this.setLeftTreeUnchecked(data);
  }
  setLeftTreeUnchecked(data) {
    this.tree.userSafeHooks().updateItemChecked(data['treeNodeID']);
  }
  dropUserAuth(data2, nodeId2) {
    const rev = (data, nodeId) => {
      for (let i = 0; i < data.length; i++) {
        const node = data[i];
        if (node.id === nodeId) {
          data.splice(i,1);
          break;
        } else {
          if (!!node.children) {
            rev(node.children, nodeId);
            if(!node.children || !node.children.length) {
              data.splice(i,1);
              break;
            }
          }
        }
      }
    };
    rev(data2, nodeId2);
  }

  addUserAuth(data) {
    let parentNode = this.getParent(this.rolesAuthList,data['treeNodeID']);
    let node = [];
    this.handleTreeData(parentNode,node);
    for(let i =0; i < node.length; i++) {
      let arr = this.nodeData.filter(x=> {
        if(x.id === node[i]['id']) {
          return x;
        }
      })
      if(arr.length===0) {
        this.nodeData.push(node[i]);
      }
    }
    this.userAuthList = this.generateCatalogTree(this.nodeData,true);

  }
  handleTreeData(list,arrRes) {
    for(let i =0; i < list.length; i++) {
      let json = JSON.parse(JSON.stringify(list[i]));
      delete json['children'];
      arrRes.push(json);
      if(i === list.length-1) {
        if(list[i]['children']) {
          this.getAllData(list[i]['children'],arrRes);
        }
      }
    }
  }
  getAllData(tree,arr) {
    tree.forEach(item=> {
      let json = JSON.parse(JSON.stringify(item));
      delete json['children'];
      arr.push(json);
      if(item['children']) {
        this.handleTreeData(item['children'],arr);
      }
    })
  }
  getParent(data2, nodeId2) {
    let arrRes = [];
    if (data2.length === 0) {
      if (!!nodeId2) {
        arrRes.unshift(data2)
      }
      return arrRes;
    }
    const rev = (data, nodeId) => {
      for (let i = 0; i < data.length; i++) {
        const node = data[i];
        if (node.id === nodeId) {
          arrRes.unshift(node);
          rev(data2, node.parent);
          break;
        } else {
          if (!!node.children) {
            rev(node.children, nodeId);
          }
        }
      }
      return arrRes;
    };
    arrRes = rev(data2, nodeId2);
    return arrRes;
  }

    getUserAuth() {
    this.apiService.getUserAuth().subscribe(list => {
      // 添加label字段
      list.forEach((x: any) => {
        x.label = x.name;
      })
      // 生成树形结构
      this.userAuthList = this.generateCatalogTree(list);
    })
    console.log('this.userAuthList',this.userAuthList);
  }

  private generateCatalogTree(list,flag?) {
    const root = list.filter(x => !x.parent)

    const depth = node => {
      const children = list.filter(x => x.parent === node.id)
      if(flag) {
        node['expanded'] = true;
        node['checked'] = true;
      }
      if (children && children.length) {
        node.children = children;
        node.children.forEach(depth);
      } else {
        node.leaf = true;
      }
      return node
    }

    return root.map(depth)
  }
  private getRolesTypeList() {
    this.apiService.getRolesTypeList().subscribe(list => {
      // 角色类型列表
      this.rolesList = list;
    })
  }
  updateRolesTypeData(data) {
    this.roleTypeEdit = true;
    this.rolesTypeData = {
      rolesType: data['name'],
      rolesDesc: data['description'],
      rolesCreateTime: data['createTime'],
      rolesStatus: data['state']==='使用'? 1: 2,
    }
    this.modal
      .open({
        title: '修改角色类型',
        size: 'large',
        component: this.addRoles
      })
      .subscribe(() => {
        this.message.success('修改成功');
        this.rolesList.forEach((item,index)=> {
          if(item['id'] === data['id']) {
            const json = {
              id: data['id'],
              name: this.rolesTypeData.rolesType,
              description: this.rolesTypeData.rolesDesc,
              createTime: this.rolesTypeData.rolesCreateTime,
              state: this.rolesTypeData.rolesStatus===1?'使用':'暂停'
            }
            this.rolesList.splice(index,1,json );
          }
        })
        this.cleanRolesTypeData();
      })
  }
  private getRolesList() {
    this.apiService.getRolesList().subscribe(list => {
      // 角色类型列表
      this.rolesList = list;
    })
  }
  addRolesType() {
    this.cleanRolesTypeData();
    this.roleTypeEdit = false;
    this.modal
      .open({
        title: '创建角色类型',
        size: 'large',
        component: this.addRoles
      })
      .subscribe((data) => {
        this.message.success('创建成功');
        console.log(this.rolesTypeData);
        const json = {
          id: this.rolesList.length + 1,
          name: this.rolesTypeData.rolesType,
          description: this.rolesTypeData.rolesDesc,
          createTime: this.rolesTypeData.rolesCreateTime,
          state: this.rolesTypeData.rolesStatus===1?'使用':'暂停',
        };
        this.rolesList.push(json);
        this.addRoleTypeData(this.rolesTypeData.rolesType);
      })
  }
  addRoleTypeData(data) {
    this.roleType.push({
      label:data,
      value:this.roleType.length+1
    });
    this.type.emit(this.roleType);
  }
  cleanRolesTypeData() {
    this.rolesTypeData = {
      rolesType:'',
      rolesStatus: '',
      rolesCreateTime: '',
      rolesDesc: ''
    };
  }
  getRoleTypeSelect(val) {
    this.roleTypeSelect = val;
    this.queryRolesList();
  }
  queryRolesList() {
    this.getRolesList();
    if(this.roleTypeSelect) {
      this.rolesList = this.rolesList.filter(x=> x.parent === this.roleTypeSelect);
    }
  }
  addRolesManages() {
    this.cleanRolesTypeData();
    this.roleTypeEdit = false;
    this.modal
      .open({
        title: '创建角色',
        size: 'large',
        component: this.addRolesManage
      })
      .subscribe((data) => {
        this.message.success('创建成功');
        console.log(this.rolesTypeData);
        const json = {
          id: this.rolesList.length +1,
          name: this.rolesTypeData.rolesType,
          description: this.rolesTypeData.rolesDesc,
          createTime: this.rolesTypeData.rolesCreateTime,
          state: this.rolesTypeData.rolesStatus===1?'使用':'暂停',
          parent: this.rolesTypeData.roleType
        };
        this.rolesList.push(json);
        let copyJson = JSON.parse(JSON.stringify(json));
        this.roleType.forEach(item=> {
          if(item.value===this.rolesTypeData.roleType) {
            copyJson['parent'] = item.label;
          }
        })
        this.roleManage.emit(copyJson);
      })
  }
  updateRolesManages(data) {
    this.cleanRolesTypeData();
    this.roleTypeEdit = true;
    this.rolesTypeData = {
      rolesType: data['name'],
      rolesDesc: data['description'],
      rolesCreateTime: data['createTime'],
      rolesStatus: data['state']==='使用'? 1: 2,
      roleType: data['parent']
    }
    this.modal
      .open({
        title: '修改角色',
        size: 'large',
        component: this.addRolesManage
      })
      .subscribe(() => {
        this.message.success('修改成功');
        this.rolesList.forEach((item,index)=> {
          if(item['id'] === data['id']) {
            const json = {
              id: data['id'],
              name: this.rolesTypeData.rolesType,
              description: this.rolesTypeData.rolesDesc,
              createTime: this.rolesTypeData.rolesCreateTime,
              state: this.rolesTypeData.rolesStatus===1?'使用':'暂停',
              parent: this.rolesTypeData.roleType===1?'业务角色':(this.rolesTypeData.roleType===2?'管理角色':'职务角色')
            }
            this.rolesList.splice(index,1,json );
          }
        })
      })
  }
  // 修改角色权限
  updateRolesAuth(data) {
    this.getAuthCatalogList();
    //this.getUserAuth();
    this.modal
      .open({
        title: '权限设置',
        size: 'large',
        component: this.rolesAuth
      })
      .subscribe(() => {
        this.message.success('设置成功');
      })
  }
}
