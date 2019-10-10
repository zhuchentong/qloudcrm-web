import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { Store } from '@ngxs/store'
import { UpdatePathAction } from '@app/store/action/layout.action'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public currentPath = ''
  public menus = []
  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.menus = this.store.selectSnapshot(state => {
      return state.layout.menu
    })
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const target = event.urlAfterRedirects
          .split('/')
          .filter(x => x)
          .find(x => !!x)

        this.store.dispatch(new UpdatePathAction(target))
        this.currentPath = target
      }
    })
  }

  public onMenuChange(event) {
    this.router.navigateByUrl(`/${event}`)
  }
}
