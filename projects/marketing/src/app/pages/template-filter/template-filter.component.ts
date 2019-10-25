// import { style } from '@angular/animations';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { ApiService } from '../../services/api.service'
import { FormGroup, FormBuilder } from '@angular/forms'

import { TagComponent } from '../../components/tag/tag.component'

@Component({
  selector: 'app-template-filter',
  templateUrl: './template-filter.component.html',
  styleUrls: ['./template-filter.component.scss'],
  providers: [ApiService, QlMessageService]
})
export class TemplateFilterComponent implements OnInit {

  @ViewChild('addTemplate', { static: true })
  private addTemplateTemp: TemplateRef<any>

  public formGroup: FormGroup = this.fb.group({})

  public tagList = []
  public templateList = []
  public shareData = [
    {value:"1",label:"分行共享"},
    {value:"1",label:"支行共享"},
    {value:"1",label:"中心支行共享"},
    {value:"1",label:"私有"},
  ]

  public stateData = [
    {value:"1",label:"创建中"},
    {value:"1",label:"有效"},
  ]

  public sexitems = [{ value: '男', label: '男' }, { value: '女', label: '女' }]
  public ageitems = [
    { value: '18-30', label: '18-30岁' },
    { value: '30-45', label: '30-45岁' },
    { value: '45-60', label: '45-60岁' },
    { value: '大于60岁', label: '大于60岁' }
  ]
  public marryitems = [{ value: '已婚', label: '已婚' }, { value: '未婚', label: '未婚' },{ value: '离异', label: '离异' },{ value: '丧偶', label: '丧偶' },{ value: '未知', label: '未知' }]
  public jopTypeitems = [
    { value: '1', label: '批发和零售' },
    { value: '2', label: '教育' },
    { value: '3', label: '信息传输、软件和信息技术服务业' },
    { value: '4', label: '交通运输、仓储和邮政业' },
    { value: '5', label: '文化、体育和娱乐业' },
    { value: '6', label: '科学研究和技术服务业' },
    { value: '7', label: '金融业' },
    { value: '8', label: '农、林、牧、渔业' },
    { value: '9', label: '采矿业' },
    { value: '10', label: '制造业' },
    { value: '11', label: '电力、热力、燃气及水生产和供应业' },
    { value: '12', label: '建筑业' },
    { value: '13', label: '房地产业' }
  ]
  public schoolitems = [
    { value: '1', label: '研究生' },
    { value: '2', label: '大学本科' },
    { value: '3', label: '大学专科和专科学校' },
    { value: '4', label: '中等专业学校' },
    { value: '5', label: '技工学校' },
    { value: '6', label: '高中' },
    { value: '7', label: '初中' },
    { value: '8', label: '小学' },
    { value: '9', label: '文盲或者半文盲' }
  ]

  public customerLevel = [
    { value: '1', label: '私人银行客户' },
    { value: '2', label: '财富管理客户' },
    { value: '3', label: '白金卡客户' },
    { value: '4', label: '金卡客户' },
    { value: '5', label: '潜力客户' },
    { value: '6', label: '普通客户' },
    { value: '7', label: '无评级客户' }
  ]
  public lcrick = [{ value: '低级', label: '低级' }, { value: '中级', label: '中级' }, { value: '高级', label: '高级' }]
  public jijinrick = [
    { value: '低级', label: '低级' },
    { value: '中级', label: '中级' },
    { value: '高级', label: '高级' }
  ]

  public tagDatas = [
    { value: '1', label: '理财达人' },
    { value: '2', label: '旅游爱好者' },
    { value: '3', label: '有房一族' },
    { value: '4', label: 'H5活动参与者' },
    { value: '5', label: '高消费客户' },
    { value: '6', label: '潜力价值客户' },
  ]

  public starcomment = [
    { value: '三星', label: '三星' },
    { value: '四星', label: '四星' },
    { value: '五星', label: '五星' }
  ]
  constructor( private fb: FormBuilder, private apiService: ApiService, private modal: ModalService, private message: QlMessageService) { }

  ngOnInit() {
    this.apiService.getTemplatelistList().subscribe(data => {
      this.templateList = data
    })

    this.apiService.getCustomerTagList().subscribe(list => {
      // 生成树形结构
      this.tagList = list.splice(0,10)
    })

  }

  public addTemplateFun(){
    this.modal
      .open({
        size:'large',
        title: '新建模板',
        component: this.addTemplateTemp
      })
      .subscribe(() => {})
  }

  public addTagFun(){
    this.modal
    .open({
      size: 'large',
      title: '高级搜索',
      component: TagComponent,
      data: {}
    })
    .subscribe(() => {
    })
  }
}
