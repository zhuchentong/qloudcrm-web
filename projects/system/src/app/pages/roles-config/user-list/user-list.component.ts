import { Component, OnInit,OnChanges, ViewChild, ViewContainerRef, Input } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ApiService } from '../../../services/api.service'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { preventDefault } from 'fullcalendar'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnChanges {
  @Input() roleManage: any;
  @Input() roleType: any;
  public userList: any[] = []
  public rolesList: any[] = []
  public rolesAuthList: any[] = []
  public userAuthList: any[] = []
  public roleRawList: any[] = []
  private roleSelect: any
  hooks: any
  private userData: any = {
    name: '',
    state: '',
    createTime: '',
    roleId: '',
    roleName: ''
  }
  private userStatus: any = [
    {
      label: '使用',
      value: '使用'
    },
    {
      label: '暂停',
      value: '暂停'
    }
  ]
  public formGroup: FormGroup

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public modal: ModalService,
    private message: QlMessageService
  ) {
    this.formGroup = fb.group({})
  }

  @ViewChild('addUser', { static: true })
  public addUser: ViewContainerRef

  @ViewChild('addUserRole', { static: true })
  public addUserRole: ViewContainerRef

  @ViewChild('tree', { static: false })
  public tree: any

  ngOnInit() {

    this.getUserList()
  }
  ngOnChanges() {
    this.getRoleList()
    /*if(this.roleManage && this.roleManage['id']) {
      const json = {
          id: this.roleManage['id'],
          name: this.roleManage['name'],
          description: this.roleManage['description'],
          createTime: this.roleManage['createTime'],
          state: this.roleManage['state'],
          parent: this.roleManage['parent']
        }
      this.rolesList.push(json);
    }*/

  }

  private getRoleList() {
    this.apiService.getUserRoleList().subscribe(data => {
      if(this.roleType && this.roleType.length&&this.roleManage && this.roleManage['id']) {
        const json = this.roleType[this.roleType.length-1];
        const j = {
            id: 51,
            name: json['label'],
            description: '',
            createTime: '',
            state: '',
            parent: 0
          }
        data.push(j);
        const js = {
          id: 100,
          name: this.roleManage['name'],
          description: this.roleManage['description'],
          createTime: this.roleManage['createTime'],
          state: this.roleManage['state'],
          parent: 51
        }
        data.push(js);
      }
      this.rolesList = data.filter(a => a.parent);
      //this.rolesList = this.rolesList.slice(0,5);
      this.roleRawList = data
      this.rolesAuthList = this.changeFlattoTree(data)
    })
  }

  private getUserList() {
    this.apiService.getUserList().subscribe(data => {
      this.userList = data
    })
  }

  changeFlattoTree(list = []) {
    list = list.map(item => ({ ...item, label: item.name }))
    const root = list.filter(x => !x.parent)

    const depth = node => {
      const children = list.filter(x => x.parent === node.id && x.parent)

      if (children && children.length) {
        node.children = children
      } else {
        node.leaf = true

        node['qlDisabled'] = true
        node['disabled'] = true
      }

      return node
    }

    return root.map(depth)
  }

  private getUserSelect(val) {
    this.roleSelect = val
    this.queryUserListByRole()
  }

  private queryUserListByRole() {
    this.getUserList()
    if (this.roleSelect) {
      this.userList = this.userList.filter(x => x.roleId === this.roleSelect)
    }
  }

  private addUserForm() {
    this.clearUserData()

    this.modal
      .open({
        title: '创建用户',
        size: 'large',
        component: this.addUser
      })
      .subscribe(data => {
        this.message.success('创建成功')

        const addData = {
          id: this.userList.length + 1,
          name: this.userData.name,
          roleId: '',
          roleName: '',
          createTime: this.userData.createTime,
          state: this.userData.state
        }
        this.userList.push(addData)
      })
  }
  clearUserData() {
    this.userData = {
      name: '',
      roleId: '',
      roleName: '',
      id: '',
      createTime: '',
      state: ''
    }
  }

  updateUserForm(data) {
    this.userData = {
      ...data
    }
    this.modal
      .open({
        title: '编辑用户',
        size: 'large',
        component: this.addUser
      })
      .subscribe(e => {
        this.message.success('编辑成功')
        const { id, name, createTime, state } = this.userData
        const editData = {
          id,
          name,
          createTime,
          state,
          roleId: '',
          roleName: ''
        }
        const editIndex = this.userList.findIndex(item => item.id === editData.id)

        this.userList.splice(editIndex, 1, editData)
      })
  }

  updateUserRole(data) {
    this.userAuthList = []
    this.modal
      .open({
        title: '角色配置',
        size: 'large',
        component: this.addUserRole
      })
      .subscribe(e => {
        this.message.success('编辑成功')
        const roleIds = []
        const roleNames = []

        const loop = list => {
          list.forEach(item => {
            roleIds.push(item.id)
            roleNames.push(item.name)
            if (item.children) {
              loop(item.children)
            }
          })
        }
        loop(this.userAuthList)

        const { id, name, createTime, state } = data
        const editIndex = this.userList.findIndex(item => item.id === id)

        const editData = {
          id,
          name,
          createTime,
          state,
          roleId: roleIds.join(','),
          roleName: ` <span style="white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;display: inherit;" title=${roleNames.join(',')}>${roleNames.join(',')}</span>  
      `
        }
        this.userList.splice(editIndex, 1, editData)
      })
  }

  getList() {
    return this.roleRawList
  }

  getTree(lis) {
    let [...ll] = lis
    let tree
    ll = ll.map(item => ({ ...item, label: item.name, checked: true }))

    const root = ll.filter(x => !x.parent)

    tree = ll.reduce((prev, item) => {
      if (!item.parent) {
        return prev
      }
      const parentIndex = prev.findIndex(i => i.id === item.parent)
      if (parentIndex != -1) {
        if (!prev[parentIndex].children) {
          prev[parentIndex].children = []
        }
        prev[parentIndex].children.push({ ...item, label: item.name, checked: true })
        return prev
      } else {
        const parentNode = this.getParentNode(item.parent)
        prev.push({ ...parentNode, label: parentNode.name, checked: true, children: [item] })

        return prev
      }
    }, root)

    return tree
  }

  getParentNode(parent) {
    const allList = this.getList()
    const parentNode = allList.filter(x => x.id === parent)
    return parentNode[0]
  }

  getNewTree(selectedLi) {
    const lli = [...selectedLi]
    const allList = this.getList()
    const list1 = allList.filter(i => lli.includes(i.name))

    const treeData = this.getTree(list1)
    return treeData
  }
  onUserChange(data) {
    this.tree.userSafeHooks().updateItemChecked(data['treeNodeID']);
  }
  onCatalogChange(selected) {
    if (selected.action !== 'checkbox') return

    const selectList = this.tree.userSafeHooks().findAllChecked()

    const rightSelectList = this.getNewTree(selectList)

    this.userAuthList = rightSelectList
  }
}
