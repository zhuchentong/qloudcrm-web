import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {ModalService} from "@shared/utils";
import {QlMessageService} from "qloud-angular/package/message/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-performance-quota',
  templateUrl: './performance-quota.component.html',
  styleUrls: ['./performance-quota.component.scss']
})
export class PerformanceQuotaComponent implements OnInit {
  twoIndex = 1;
  public formGroup: FormGroup = this.fb.group({})
  constructor(   private apiService: ApiService,
                 private fb: FormBuilder,
                 public modal: ModalService,
                 private message: QlMessageService,
                 private router: Router) { }
  public orgList: any[] = [];
  public custList: any[] = [];
  ngOnInit() {
    this.formGroup = this.fb.group({ name: [''] })
    this.onRefresh()
  }
  public onRefresh() {

    this.apiService.getOrgBankList().subscribe(data => {
      this.orgList = data
    })
    this.apiService.getCustBankList().subscribe(data => {
      this.custList = data.sort(x => 0.5 - Math.random())
    })
    // this.apiService.getCustomerList().subscribe(data => {
    //   // this.customerList = data.sort(x => 0.5 - Math.random())
    // })
  }
  twoHandle(index: number): void {
    this.twoIndex = index;
  }
}