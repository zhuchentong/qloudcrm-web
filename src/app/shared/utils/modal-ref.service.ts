import { Injectable, ApplicationRef } from '@angular/core'
import { ModalContainerComponent } from '../components/modal-container/modal-container.component'
import { Observable } from 'rxjs'

@Injectable()
export class ModalRef {
  constructor(private appRef: ApplicationRef, private _container: ModalContainerComponent) {}

  close(result?: any): void {
    this._container.closeDialog(result)
  }

  onClosedModal(): Observable<any> {
    return this._container.onClosedModal()
  }

  onOpenModal(): Observable<any> {
    return this._container.onOpenModal()
  }
}
