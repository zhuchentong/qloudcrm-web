import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  // 切换参数
  public sex: ''
  public age: ''
  public school: ''
  public xz: ''
  public income: ''
  public channel: ''
  public level: ''
  public state: ''
  public product: ''
  public risk: ''
  public tztype: ''
  public integral: ''
  public groupstate = [{ value: '开启', label: '开启' }, { value: '关闭', label: '关闭' }]
  public grouptype = [{ value: '小资', label: '小资' }, { value: '社会精英', label: '社会精英' }]

  constructor(private router: Router) {}

  ngOnInit() {}

  // 切换选项显示
  public closeTag(event) {
    switch (event) {
      case 1:
        this.sex = null
        break
      case 2:
        this.age = null
        break
      case 3:
        this.school = null
        break
      case 4:
        this.income = null
        break
      case 5:
        this.channel = null
        break
      case 6:
        this.level = null
        break
      case 7:
        this.state = null
        break
      case 8:
        this.product = null
        break
      case 9:
        this.risk = null
        break
      case 10:
        this.tztype = null
        break
      case 11:
        this.integral = null
        break
    }
  }
  // 保存群组
  public saveGroup(){
    this.router.navigateByUrl('/customer/customer-group')
  }
}
