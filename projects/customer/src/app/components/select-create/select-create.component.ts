import { Component, OnInit } from '@angular/core'
import { ModalRef } from '@app/shared/utils'

@Component({
  selector: 'app-select-create',
  templateUrl: './select-create.component.html',
  styleUrls: ['./select-create.component.scss'],
  providers: [ModalRef]
})
export class SelectCreateComponent implements OnInit {
  constructor(private modalRef: ModalRef) {}

  ngOnInit() {}

  public onSubmit() {
    this.modalRef.close(true)
  }
}
