import { Component, OnInit, SkipSelf, Input } from '@angular/core'
import { TabContainerComponent } from '../tab-container/tab-container.component'
import { trigger, transition, style, animate, state } from '@angular/animations'

@Component({
  selector: 'tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
  animations: [trigger('enter', [transition(':enter', [style({ opacity: 0 }), animate('500ms ease-in')])])]
})
export class TabItemComponent implements OnInit {
  @Input()
  public title: string

  @Input()
  public index: string

  public active = false

  constructor(@SkipSelf() public _container: TabContainerComponent) {}

  ngOnInit() {
    this._container.registerTabItem(this)
  }
}
