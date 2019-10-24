import { Component, OnInit, ViewChild } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { ModalRef, ModalService } from '@app/shared/utils'
import { DataTableComponent } from '@app/shared/components/data-table/data-table.component'

@Component({
  selector: 'app-select-event',
  templateUrl: './select-event.component.html',
  styleUrls: ['./select-event.component.scss'],
  providers: [ModalRef]
})
export class SelectEventComponent implements OnInit {
  public eventList: any[] = []
  @ViewChild('table', { static: true })
  public table: DataTableComponent

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
