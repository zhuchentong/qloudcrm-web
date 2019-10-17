import { Component, OnInit } from '@angular/core';
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder } from '@angular/forms'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-conflict-detial',
  templateUrl: './conflict-detial.component.html',
  styleUrls: ['./conflict-detial.component.scss'],
  providers: [ModalService,PageService]
})
export class ConflictDetialComponent implements OnInit {
  conflictDetial: any;
  conflictId: string;
  conflictList: any [];
  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.conflictId= this.activatedRoute.snapshot.params['id'];
    console.log(this.conflictId);
    this.initialData(this.conflictId);
  }

  /**
   * 初始化查询数据
   * @param id
   */
  public initialData(id: string){
      this.apiService.getConflictMarketActivation().subscribe(data => {
         for(var i=0;i<data.length;i++){
           if(data[i].id ===id){
             this.conflictDetial = data[i];
             this.conflictList=this.conflictDetial.conflicts;
           }
         }
      })
  }

}
