import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { ApiService } from '../../services/api.service'
import { FormGroup, FormBuilder } from '@angular/forms'
import { SelectCustomerComponent } from '../../components/select-customer/select-customer.component'
import { TagComponent } from './../../components/tag/tag.component';

@Component({
  selector: 'app-explore-create',
  templateUrl: './explore-create.component.html',
  styleUrls: ['./explore-create.component.scss'],
  providers: [ApiService, QlMessageService]
})
export class ExploreCreateComponent implements OnInit {

  @ViewChild('delCustomer', { static: true })
  private delCustomerTemp: TemplateRef<any>


  @ViewChild('selTemplate', { static: true })
  private selTemplateTemp: TemplateRef<any>

  public formGroup: FormGroup = this.fb.group({})

  public customerList: any[] = []
  public templateList:any[] = []

  public customerLevel = [
    { value: '1', label: '私行客户' },
    { value: '2', label: '钻石客户' },
    { value: '3', label: '白金客户' },
    { value: '4', label: '黄金客户' },
    { value: '5', label: '白银客户' },
    { value: '6', label: '优质客户' },
    { value: '7', label: '价值客户' },
    { value: '8', label: '大众客户' },
  ]
  public aumData = [{ value: '大于等于', label: '大于等于' }, { value: '小于等于', label: '小于等于' }]
  public aumData2 = [{ value: '大于等于', label: '大于等于' }, { value: '小于等于', label: '小于等于' }]
  public customerPotential = [{value: '1', label: '高' },{ value: '2', label: '中' },{ value: '3', label: '低' }]
  public sexitems = [{ value: '男', label: '男' }, { value: '女', label: '女' }]
  public ageitems = [
    { value: '18-30', label: '18-30岁' },
    { value: '30-45', label: '30-45岁' },
    { value: '45-60', label: '45-60岁' },
    { value: '大于60岁', label: '大于60岁' }
  ]
  public marryitems = [{ value: '已婚', label: '已婚' }, { value: '未婚', label: '未婚' }]
  public schoolitems = [
    { value: '本科以下', label: '本科以下' },
    { value: '本科', label: '本科' },
    { value: '硕士', label: '硕士' }
  ]
  public jobtypeitems = [{ value: '1', label: '水利,建设行业' }, { value: '2', label: '咨询服务行业' }, { value: '3', label: '电子科学技术行业' }]
  public lcrick = [{ value: '低级', label: '低级' }, { value: '中级', label: '中级' }, { value: '高级', label: '高级' }]
  public jijinrick = [
    { value: '低级', label: '低级' },
    { value: '中级', label: '中级' },
    { value: '高级', label: '高级' }
  ]
  public starcomment = [
    { value: '三星', label: '三星' },
    { value: '四星', label: '四星' },
    { value: '五星', label: '五星' }
  ]
  public baseitems = [{ value: '', label: '' }]
  public ctlever = [
    { value: '银卡客户', label: '银卡客户' },
    { value: '金卡客户', label: '金卡客户' },
    { value: '钻石客户', label: '钻石客户' }
  ]

  constructor(private fb: FormBuilder, private apiService: ApiService, private modal: ModalService, private message: QlMessageService) { }

  ngOnInit() {
    this.apiService.getcustomerDelList().subscribe(data => {
      this.customerList = data
    })

    this.apiService.getTemplatelistList().subscribe(data => {
      this.templateList = data
    })
  }

  public onSelectCustomer() {
    this.modal
      .open({
        title: '添加客户',
        size: 'huge',
        component: SelectCustomerComponent
      })
      .subscribe(data => {})
  }

  public onSelectTags() {
    this.modal
      .open({
        title: '选择标签',
        size: 'large',
        component: TagComponent
      })
      .subscribe(data => {})
  }

  public selTemplateFun(){
    this.modal
    .open({
      title: '选择模板',
      size: 'large',
      component: this.selTemplateTemp
    })
    .subscribe(data => {})
  }

  public closeFun(){
    this.modal.close()
  }

}
