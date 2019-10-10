import { Directive, HostListener, Input, HostBinding } from '@angular/core'
import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { environment } from 'src/environments/environment'

@Directive({
  selector: '[navigate]'
})
export class NavigateDirective {
  @Input() navigate: [string, any, string?]

  constructor(private router: Router, private location: Location) {}

  @HostListener('click', ['$event'])
  onClick() {
    const [routerLink, routerParams, application] = this.navigate

    if (environment.production && application) {
      if (!application) {
        return console.error('请填写需要路由的应用名称')
      }
      const query = location.search
      const targetParams = Object.entries(routerParams || {})
        .map(([key, value]) => `;${key}=${value}`)
        .join()
      const host = location.host
      const protocol = location.protocol
      window.location.href = `${protocol}//${host}/plugins/${application}/${query}#${routerLink}${targetParams}`
    } else {
      this.router.navigate([routerLink, routerParams])
    }
  }
}
