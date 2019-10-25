import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-finanical-combo',
  templateUrl: './finanical-combo.component.html',
  styleUrls: ['./finanical-combo.component.scss'],
  providers: [ModalService, PageService]
})
export class FinanicalComboComponent implements OnInit {
  public productList: any[] = []
  public showGroup = false
  public formGroup: FormGroup = this.fb.group({
    target: [''],
    period: [''],
    assumption: this.fb.group({ start: [''], end: [''] }),
    riskLevel: [''],
    customerStars: [''],
    aum: ['500000.00'],
    debt: ['900000,00']
  })
  constructor(
    public location: Location,
    private apiService: ApiService,
    private fb: FormBuilder,
    public modal: ModalService,
    public pageService: PageService,
    private message: QlMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.reflashData();
  }

  public onCheckChange(selection) {
    this.showGroup = selection.length > 0
  }

  public onRefresh() {
    console.log(JSON.stringify(this.formGroup.value))
    this.reflashData()
  }

  public reflashData() {
    this.apiService.getProductList().subscribe(data => {
      this.productList = data.sort(x => 0 - Math.random())
    })
  }
}
