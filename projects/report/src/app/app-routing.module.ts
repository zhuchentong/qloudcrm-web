import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { AssetViewComponent } from './pages/asset-view/asset-view.component'
import { CustomerViewComponent } from './pages/customer-view/customer-view.component'

const routes: Routes = [
  { path: 'report/customer-view', component: CustomerViewComponent },
  { path: 'report/asset-view', component: AssetViewComponent }
]

routes.push({
  path: environment.production ? '' : 'report',
  redirectTo: '/report/customer-view',
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
