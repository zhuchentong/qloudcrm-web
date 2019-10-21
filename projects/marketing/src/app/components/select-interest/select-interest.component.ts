import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { ModalRef } from '@app/shared/utils'

@Component({
  selector: 'app-select-interest',
  templateUrl: './select-interest.component.html',
  styleUrls: ['./select-interest.component.scss'],
  providers: [ModalRef]
})
export class SelectInterestComponent implements OnInit {
  public interestList: any[] = []

  constructor(public modalRef: ModalRef, private apiService: ApiService) {}

  ngOnInit() {
    this.getInterestList()
  }

  getInterestList() {
    this.apiService.getEquitiesList().subscribe(data => {
      this.interestList = data
    })
  }
}
