import { Component, OnInit, Output, EventEmitter, AfterContentInit, AfterViewInit, Input } from '@angular/core'
import { TabItemComponent } from '../tab-item/tab-item.component'

@Component({
  selector: 'tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit, AfterContentInit {
  public tabItemList = []

  @Output()
  public changeEvent = new EventEmitter<any>(false)

  @Input()
  public model

  constructor() {}

  ngOnInit() {}

  public registerTabItem(tabItem: TabItemComponent) {
    this.tabItemList.push(tabItem)
  }

  ngAfterContentInit() {
    if (!this.tabItemList.length) {
      return
    }

    const tab = this.tabItemList.find(x => x.index === this.model) || this.tabItemList[0]
    tab.active = true
  }

  public changeActiveTab(tab: TabItemComponent) {
    this.tabItemList.forEach(item => {
      item.active = item === tab
    })

    this.changeEvent.emit(this.tabItemList.indexOf(tab))
  }
}
