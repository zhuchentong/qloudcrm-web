import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'
import { ApiService } from '../../services/api.service'
import { FormGroup, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.scss'],
  providers: [ApiService, QlMessageService]
})
export class AddTemplateComponent implements OnInit {

  @ViewChild('tagcompontent', { static: true })
  private tagcompontentTemp: TemplateRef<any>

  public formGroup: FormGroup = this.fb.group({})

  public tagList = []
  public templateList = []

  constructor(private fb: FormBuilder, private apiService: ApiService, private modal: ModalService, private message: QlMessageService) { }

  ngOnInit() {
    this.apiService.getCustomerTagList().subscribe(list => {
      // 生成树形结构
      this.tagList = list.splice(1,6)
    })

  }

  public addTagFun(){
    this.modal
    .open({
      size: 'large',
      title: '添加标签',
      component: this.tagcompontentTemp,
      data: {}
    })
    .subscribe(() => {
    })
  }

  public closeFun(){
    this.modal.close()
  }

}
