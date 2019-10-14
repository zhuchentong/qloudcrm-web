import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'
import { ModalService } from '@app/shared/utils'
import { FormBuilderComponent } from '../form-builder/form-builder.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private modal: ModalService) {}

  ngOnInit() {}

  onOpenFormBuilder() {
    this.modal.open({
      header: false,
      size: 'large',
      component: FormBuilderComponent
    })
  }
}
