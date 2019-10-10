import { Component, OnInit, Input } from '@angular/core'
import { ModalRef } from '@app/shared/utils/modal-ref.service'

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
  providers: [ModalRef]
})
export class ModalConfirmComponent implements OnInit {
  @Input()
  public message: string

  constructor(private modalRef: ModalRef) {}

  ngOnInit() {}

  public onSubmbit() {
    this.modalRef.close(true)
  }

  public onCancel() {
    this.modalRef.close()
  }
}
