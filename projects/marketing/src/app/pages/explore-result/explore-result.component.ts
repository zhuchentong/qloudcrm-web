import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-explore-result',
  templateUrl: './explore-result.component.html',
  styleUrls: ['./explore-result.component.scss']
})
export class ExploreResultComponent implements OnInit {

  public customerList = []
  public customertypeList = [
    {
      "name":'金卡客户',
      'num':'2300',
      'AUM':'900万',
      'allassets':'2000万'
    },
    {
      "name":'潜力客户',
      'num':'300',
      'AUM':'400万',
      'allassets':'900万'
    },  {
      "name":'白金卡客户',
      'num':'800',
      'AUM':'1000万',
      'allassets':'9000万'
    },  {
      "name":'私人银行客户',
      'num':'700',
      'AUM':'890万',
      'allassets':'7900万'
    },  {
      "name":'财富管理客户',
      'num':'1901',
      'AUM':'8000万',
      'allassets':'90000万'
    },  {
      "name":'普通客户',
      'num':'10901',
      'AUM':'1000万',
      'allassets':'76000万'
    }
  ]

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCustomerList().subscribe(data => {
      this.customerList = data
    })
  }

}
