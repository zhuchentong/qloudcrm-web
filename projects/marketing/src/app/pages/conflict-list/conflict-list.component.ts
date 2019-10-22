import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component'
import { Location } from '@angular/common'
import { FormBuilder } from '@angular/forms'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { Router } from '@angular/router'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-conflict-list',
  templateUrl: './conflict-list.component.html',
  styleUrls: ['./conflict-list.component.scss'],
  providers: [ModalService,PageService]
})
export class ConflictListComponent implements OnInit {
  private back:boolean = true;
  public conflictList:  any[] = [];
  public showGroup = false
  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router) { }

  ngOnInit() {
    this.initialTableData();
  }
  public onCheckChange(selection) {
    this.showGroup = selection.length > 0
  }
  public initialTableData(){
    this.apiService.getConflictMarketActivation().subscribe(data => {
      this.conflictList = data.sort(x => 0.5 - Math.random())
    })

    // this.conflictList = this.apiService.getConflictMarketActivation();
  }
  public toDetial(id){
    console.log(id);
    this.router.navigate(["marketing/conflict-detial",id]);
  }

  public delay(id){
    this.message.info("延期成功");
    this.initialTableData();
  }

  public copy(id){
    this.message.info("复制成功");
    this.initialTableData();
  }

}
