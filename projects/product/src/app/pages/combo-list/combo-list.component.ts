import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { QlMessageService } from 'qloud-angular'
import { plainToClass } from 'class-transformer'
import { DictService } from '@app/shared/utils/dict.service'
import { ApiService } from '../../services/api.service'
import { ModalService } from '@app/shared/utils'

@Component({
  selector: 'app-combo-list',
  templateUrl: './combo-list.component.html',
  styleUrls: ['./combo-list.component.scss']
})
export class ComboListComponent implements OnInit {
  public comboList: any[] = []
  public productTypes = [
    {value:'1',label:'理财产品'},
    {value:'2',label:'基金'},
    {value:'3',label:'期货'},
    {value:'4',label:'债劵'},
    {value:'5',label:'股票'},
    {value:'6',label:'贵金属'},
  ]

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getcomboList().subscribe(data => {
      this.comboList = data
    })
  }
}
