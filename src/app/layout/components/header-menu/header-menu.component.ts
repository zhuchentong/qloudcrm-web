import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { Store } from '@ngxs/store'

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  public currentMenu = []
  public currentPath = ''
  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const target = event.urlAfterRedirects
        this.currentPath = `#${target}`
      }
    })

    this.store
      .select(state => state.layout)
      .subscribe(layout => {
        this.currentMenu = layout.currentMenu.pluginTab
      })
  }

  public onMenuChange(event) {
    this.router.navigateByUrl(event.replace(/^#/g, ''))
  }
}
