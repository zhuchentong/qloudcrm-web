import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-tag-view',
  templateUrl: './tag-view.component.html',
  styleUrls: ['./tag-view.component.scss']
})
export class TagViewComponent implements OnInit {
  public hotTagList: any[] = []
  public userTagList: any[] = []
  public newTagList: any[] = []

  constructor(private apiService: ApiService) {
    this.apiService.getCustomerTagList('tag').subscribe(data => {
      const list = data.sort(x => 0.3 - Math.random()).slice(0, 10)
      this.hotTagList = list.sort(x => 0.3 - Math.random()).slice(0, 10)
      this.userTagList = list.sort(x => 0.4 - Math.random()).slice(0, 10)
      this.newTagList = list.sort(x => 0.5 - Math.random()).slice(0, 10)
    })
  }

  ngOnInit() {}
}
