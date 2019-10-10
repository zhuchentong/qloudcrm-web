import { Component, OnInit, Input } from '@angular/core'
import { ModalRef } from '@app/shared/utils/modal-ref.service'

@Component({
  selector: 'app-modal-prompt',
  templateUrl: './modal-prompt.component.html',
  styleUrls: ['./modal-prompt.component.scss'],
  providers: [ModalRef]
})
export class ModalPromptComponent implements OnInit {
  @Input()
  public message: string
  @Input()
  public placeholder: string = ''
  public value: string = ''

  constructor(private modalRef: ModalRef) {}

  public ngOnInit() {}

  public onSubmbit() {
    this.modalRef.close(this.value)
  }

  public onCancel() {
    this.modalRef.close()
  }
}
