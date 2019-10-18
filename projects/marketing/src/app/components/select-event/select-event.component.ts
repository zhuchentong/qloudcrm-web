import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { ModalRef, ModalService } from '@app/shared/utils'

@Component({
  selector: 'app-select-event',
  templateUrl: './select-event.component.html',
  styleUrls: ['./select-event.component.scss'],
  providers: [ModalRef]
})
export class SelectEventComponent implements OnInit {
  public eventList: any[] = []

  constructor(private apiService: ApiService, public modalRef: ModalRef) {}

  ngOnInit() {
    this.onRefresh()
  }

  onRefresh() {
    this.apiService.getEventList().subscribe(data => {
      this.eventList = data.sort(() => Math.random() - 0.5)
    })
  }
}
