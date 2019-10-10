import { Injectable, ApplicationRef } from '@angular/core'
import { ModalContainerComponent } from '../components/modal-container/modal-container.component'
import { Observable } from 'rxjs'
import { Store } from '@ngxs/store'
import { DictState } from '@app/store/state/dict.state'
import * as dict from '@app/config/enum.config'
@Injectable({
  providedIn: 'root'
})
export class DictService {
  constructor(private store: Store) {}

  public getDict(dictType: dict.DictType | string) {
    return this.store.selectSnapshot(DictState.getDict(dictType))
  }

  public get all() {
    return dict
  }
}
