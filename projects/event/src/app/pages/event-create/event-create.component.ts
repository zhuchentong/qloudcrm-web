import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ModalService } from '@shared/utils'
import { PageService } from '@core/http'
import { QlMessageService } from 'qloud-angular/package/message/message.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
  providers: [ModalService,PageService]
})
export class EventCreateComponent implements OnInit {
  public formGroup: FormGroup = this.fb.group({})
  // public dataList: any[] ;
  private itemId: string;
  public eventType: any[];
  public channel: any[];
  public customerLevel: any[];
  public tradeArea: any;
  public triggerChannels: any[] = new Array();
  public tagAttribute: any[] = new Array();
  constructor(public location: Location,
              private apiService: ApiService,
              private fb: FormBuilder,
              public modal: ModalService,
              public pageService: PageService,
              private message: QlMessageService,
              private router: Router) {
    this.apiService.getEventType().subscribe(data => {
      this.eventType = data;
    });
    this.apiService.getEventChannel().subscribe(data => {
      this.channel = data;
    });

    this.apiService.getCustomerLevel().subscribe(data => {
      this.customerLevel = data;
    });
    this.apiService.getTradeArea().subscribe(data =>{
      this.tradeArea = data;
    })
  }

  ngOnInit() {

  }

  public onSubmit() {
    this.message.success('创建成功')
    this.router.navigate(['/event/event-list'], { replaceUrl: true })
  }

}
