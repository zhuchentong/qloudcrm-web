import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { CustomerListComponent } from './pages/customer-list/customer-list.component'
import { CustomerLevelComponent } from './pages/customer-level/customer-level.component';
import { CustomerAssetsComponent } from './pages/customer-assets/customer-assets.component'

const routes: Routes = [
  { path: 'customer/customer-list', component: CustomerListComponent },
  { path: 'customer/customer-level', component: CustomerLevelComponent },
  { path: 'customer/customer-assets', component: CustomerAssetsComponent }
]

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
