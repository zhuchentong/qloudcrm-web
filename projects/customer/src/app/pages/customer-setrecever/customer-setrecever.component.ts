import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { QlMessageService } from 'qloud-angular'


@Component({
  selector: 'app-customer-setrecever',
  templateUrl: './customer-setrecever.component.html',
  styleUrls: ['./customer-setrecever.component.css'],
  providers: [ModalService]
})
export class CustomerSetreceverComponent implements OnInit {

  @ViewChild('setReceiver', { static: true })
  private setReceiverTemp: TemplateRef<any>

  @ViewChild('setReceiverfu', { static: true })
  private setReceiverfuTemp: TemplateRef<any>


  // private setReceiver: TemplateRef<any>

  public setList = [
    {
      "zghjg":"建设银行",
      "khdj":"金卡客户",
      "ghjsr":"刘伟"
    },
    {
      "zghjg":"农业银行",
      "khdj":"金卡客户",
      "ghjsr":"陈平"
    },
    {
      "zghjg":"招商银行",
      "khdj":"普通客户",
      "ghjsr":"刘富贵"
    }
  ]

  public setfghList = [
    {
      "fghjg":"招商银行",
      "zghjg":"招商银行",
      "khdj":"普通客户",
      "fhjsr":"刘翔"
    }
  ]

  constructor( private modal: ModalService, private message: QlMessageService) { }

  ngOnInit() {
  }

  public addReceiver(){
    this.modal
    .open({
      title: '新增主管户',
      component: this.setReceiverTemp
    })
    .subscribe(() => {
      this.message.success('新增成功')
    })
  }

  public addReceiverfu(){
    this.modal
    .open({
      title: '新增辅管户',
      component: this.setReceiverfuTemp
    })
    .subscribe(() => {
      this.message.success('新增成功')
    })
  }

}
