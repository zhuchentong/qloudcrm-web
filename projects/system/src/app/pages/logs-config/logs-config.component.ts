import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-logs-config',
  templateUrl: './logs-config.component.html',
  styleUrls: ['./logs-config.component.scss']
})
export class LogsConfigComponent implements OnInit {
  public logsListAll: any[] = [
    {
      operator: 'Hailey Kihn',
      operateTime: '2019-03-10 21:20:37',
      content: '登录'
    },
    {
      operator: 'Hailey Kihn',
      operateTime: '2019-03-10 21:20:37',
      content: '修改密码'
    },
    {
      operator: 'Nigel Lind',
      operateTime: '2019-03-12 11:20:37',
      content: '登录'
    },
    {
      operator: 'Nigel Lind',
      operateTime: '2019-03-20 21:00:37',
      content: '登出'
    },
    {
      operator: 'Billie Jacobs Sr.',
      operateTime: '2019-09-12 11:20:37',
      content: '登录'
    },
    {
      operator: 'Kaci Rau',
      operateTime: '2019-09-20 21:00:37',
      content: '登出'
    },
    {
      operator: 'Ms. Cristal Moen',
      operateTime: '2019-09-12 11:20:37',
      content: '登录'
    },
    {
      operator: 'Kaci Rau',
      operateTime: '2019-09-20 21:00:37',
      content: '登录'
    }
  ]
  public logsList = []

  public formGroup: FormGroup
  constructor(public fb: FormBuilder) {
    this.formGroup = fb.group({
      startDate: [''],
      endDate: [''],
      operator: ['']
    })
  }

  ngOnInit() {
    this.logsList = [...this.logsListAll]
  }

  public queryLogsList() {
    const allList = [...this.logsListAll]
    const values = this.formGroup.value
    const { operator, startDate, endDate } = values
    const startDateValue = new Date(startDate).valueOf()
    const endDateValue = new Date(endDate).valueOf()

    const logList = allList.filter(item => {
      let flag: boolean = false
      let flag1 = true
      let flag2 = true
      let flag3 = true
      if (operator) {
        flag1 = item.operator.indexOf(operator) !== -1
      }
      if (startDate) {
        flag2 = new Date(item.operateTime).valueOf() >= startDateValue
      }
      if (endDate) {
        flag3 = new Date(item.operateTime).valueOf() <= endDateValue
      }

      if (!operator && !startDate && !endDate) {
        flag = true
      } else {
        flag = flag1 && flag2 && flag3
      }
      console.log(flag)

      return flag
    })
    this.logsList = logList
  }

  public clearFormField(key) {
    this.formGroup.patchValue({
      [key]: ''
    })
  }
}
