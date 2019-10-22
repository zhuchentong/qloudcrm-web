import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { QlMessageService } from 'qloud-angular'
import { plainToClass } from 'class-transformer'
import { DictService } from '@app/shared/utils/dict.service'
import { ApiService } from '../../services/api.service'
import { ModalService } from '@app/shared/utils'

@Component({
  selector: 'app-attention-list',
  templateUrl: './attention-list.component.html',
  styleUrls: ['./attention-list.component.scss'],
  providers: [ApiService, QlMessageService]
})
export class AttentionListComponent implements OnInit {
  public attentionList: any[] = []
  public productTypes = [
    {value:'1',label:'理财产品'},
    {value:'2',label:'基金'},
    {value:'3',label:'期货'},
    {value:'4',label:'债劵'},
    {value:'5',label:'股票'},
    {value:'6',label:'贵金属'},
  ]

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    public modal: ModalService,
    private message: QlMessageService) {}

  ngOnInit() {
    this.apiService.getProductList().subscribe(data => {
      this.attentionList = data.splice(15,5)
    })
  }

  public submitFun(){
  }
}
