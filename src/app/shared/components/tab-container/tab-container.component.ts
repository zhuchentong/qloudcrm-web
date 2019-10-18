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

  @Input('tab-position') public TabPosition: 'top' | 'left' | 'right' | 'bottom' = 'top'

  public currentIndex

  constructor() {}

  ngOnInit() {}

  get containerClass() {
    return {
      ['position-' + this.TabPosition]: true
    }
  }
  public registerTabItem(tabItem: TabItemComponent) {
    this.tabItemList.push(tabItem)
  }

  ngAfterContentInit() {
    if (!this.tabItemList.length) {
      return
    }

    const tab = this.tabItemList.find(x => x.index === this.model) || this.tabItemList[0]
    tab.active = true
    this.updateCurrentIndex()
  }

  public updateCurrentIndex() {
    this.currentIndex = this.tabItemList.findIndex(x => x.active)
  }

  public get containerStyle() {
    return {
      'margin-left.%': -(this.currentIndex || 0) * 100
    }
  }

  public changeActiveTab(tab: TabItemComponent) {
    this.tabItemList.forEach(item => {
      item.active = item === tab
    })
    this.updateCurrentIndex()
    this.changeEvent.emit(this.tabItemList.indexOf(tab))
  }
}
