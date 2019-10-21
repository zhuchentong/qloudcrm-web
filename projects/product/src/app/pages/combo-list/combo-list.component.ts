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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getcomboList().subscribe(data => {
      this.comboList = data
    })
  }
}
