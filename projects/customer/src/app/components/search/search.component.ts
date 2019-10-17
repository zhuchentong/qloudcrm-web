import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ModalRef } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { plainToClass } from 'class-transformer'
import { DictService } from '@app/shared/utils/dict.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ModalRef]
})
export class SearchComponent implements OnInit {
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
  public ctassets = [
    { value: '20万以下', label: '20万以下' },
    { value: '20-50万', label: '20-50万' },
    { value: '50-100万', label: '50-100万' },
    { value: '100万以上', label: '100万以上' }
  ]
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
  public customerPotential = [
    { value: '1', label: '高' },
    { value: '2', label: '中' },
    { value: '3', label: '低' },
  ]
  // public channel = [{value:'线上挖掘',label:'线上挖掘'},{value:'线下挖掘',label:'线下挖掘'}]
  public tradType = [{value:'1',label:'工资代发'},{value:'2',label:'一般客户'},{value:'3',label:'学费代发'},]
  public formGroup: FormGroup = this.fb.group({})
  public chandelType = [{value:'1',label:'网银'},{value:'2',label:'手机app'}]
  public tradArea = [{value:'1',label:'高新区'},{value:'2',label:'雁塔区'}]

  constructor(private modalRef: ModalRef, private fb: FormBuilder) {}

  ngOnInit() {}

  public onSubmit() {
    this.modalRef.close(true)
  }
}
