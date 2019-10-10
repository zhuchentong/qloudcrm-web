import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Store } from '@ngxs/store'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}
  /**
   * 验证是否可以跳转
   * @param next 路由快照
   * @param state 路由参数
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // TODO:守卫检测
    return true
  }

  /**
   * 检查用户状态
   */
  // private checkUser(): boolean {
  //   const user = this.store.selectSnapshot(UserState.getUser)
  //   return !!(user && user.userId)
  // }
}
