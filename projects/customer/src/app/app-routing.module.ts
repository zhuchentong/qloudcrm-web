import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { CustomerListComponent } from './pages/customer-list/customer-list.component'

const routes: Routes = [{ path: 'customer/customer-list', component: CustomerListComponent }]

routes.push({
  path: environment.production ? '' : 'customer',
  redirectTo: '/customer/customer-list',
  pathMatch: 'full'
})

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
