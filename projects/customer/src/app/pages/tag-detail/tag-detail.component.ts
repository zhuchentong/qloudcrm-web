import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../../services/api.service'
import { EchartService } from '@app/shared/utils/echart.service'

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.scss']
})
export class TagDetailComponent implements OnInit {
  public tag
  public content: ViewContainerRef
  public userList: any[] = []
  public recordList: any[] = []
  public assetOption
  public levelOption
  public riskOption
  public ageOption

  @ViewChild('tagUser', { static: true })
  private tagUser

  constructor(private echartService: EchartService, private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')

    this.getTagDetail(id)
    this.content = this.tagUser
  }

  private getTagDetail(id) {
    this.apiService.getTagDetail(id).subscribe(data => {
      this.tag = data
    })

    this.apiService.getCustomerTagUserList().subscribe(data => {
      this.userList = data
    })

    this.apiService.getCustomerTagRecordList().subscribe(data => {
      this.recordList = data
    })

    this.apiService.getCustomerViewData().subscribe(({ tradeAge }) => {
      this.ageOption = this.echartService.getOption({ type: 'pie', data: tradeAge })
    })

    this.assetOption = this.echartService.getOption({
      type: 'pie',
      data: [
        {
          name: '20万以上',
          value: 35
        },
        {
          name: '5万以下',
          value: 45
        },
        {
          name: '5万-20万',
          value: 65
        }
      ]
    })

    this.levelOption = this.echartService.getOption({
      type: 'pie',
      data: [
        {
          name: '普卡',
          value: 421
        },
        {
          name: '金卡',
          value: 153
        },
        {
          name: '白金卡',
          value: 82
        }
      ]
    })

    this.riskOption = this.echartService.getOption({
      type: 'pie',
      data: [
        {
          name: '激进',
          value: 83
        },
        {
          name: '保守',
          value: 32
        },
        {
          name: '稳健',
          value: 86
        },
        {
          name: '平衡',
          value: 26
        },
        {
          name: '积极',
          value: 65
        }
      ]
    })
  }

  public onChangeTab(content) {
    this.content = content
  }
}
