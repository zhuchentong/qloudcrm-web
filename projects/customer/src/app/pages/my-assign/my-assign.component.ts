import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-my-assign',
  templateUrl: './my-assign.component.html',
  styleUrls: ['./my-assign.component.css'],
  providers: [ApiService]
})
export class MyAssignComponent implements OnInit {
  public yghjgData = [
    { value: '西安银行丈八北路支行', label: '西安银行丈八北路支行' },
    { value: '建设银行高新四路支行', label: '建设银行高新四路支行' }
  ]
  public yghrData = [{ value: '李娜', label: '李娜' }, { value: '张建国', label: '张建国' }]
  public yghjsData = [{ value: '主管户', label: '主管户' }]
  public sffpghrData = [{ value: '是', label: '是' }, { value: '否', label: '否' }]
  public cardType = [{ value: '居民身份证', label: '居民身份证' }]
  public levelData = [{ value: '金卡客户', label: '金卡客户' }, { value: '银卡客户', label: '银卡客户' }]
  public sfdtData = [{ value: '是', label: '是' }, { value: '否', label: '否' }]
  public aumData = [{ value: '大于等于', label: '大于等于' }, { value: '小于等于', label: '小于等于' }]
  public aumData2 = [{ value: '大于等于', label: '大于等于' }, { value: '小于等于', label: '小于等于' }]
  public khghData = [{ value: '辅管客户关系', label: '辅管客户关系' }]

  public myassignList = []

  public formGroup: FormGroup = this.fb.group({})

  constructor(private fb: FormBuilder,private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getcustomerMyassignList().subscribe(data => {
      this.myassignList = data
    })
  }
}
