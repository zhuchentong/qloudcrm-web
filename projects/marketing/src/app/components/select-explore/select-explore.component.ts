import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { ModalRef } from '@app/shared/utils'

@Component({
  selector: 'app-select-explore',
  templateUrl: './select-explore.component.html',
  styleUrls: ['./select-explore.component.scss'],
  providers: [ModalRef]
})
export class SelectExploreComponent implements OnInit {
  public exploreList: any[] = []

  constructor(private apiService: ApiService, public modalRef: ModalRef) {}

  ngOnInit() {
    this.onRefresh()
  }

  onRefresh() {
    // this.apiService.getExplorList().subscribe(data => {
    //   this.exploreList = data.sort(() => Math.random() - 0.5)
    // })
  }
}
