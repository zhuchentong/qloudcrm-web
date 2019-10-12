import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'

import { CustomerListComponent } from './pages/customer-list/customer-list.component'
import { CustomerLevelComponent } from './pages/customer-level/customer-level.component'
import { CustomerAssetsComponent } from './pages/customer-assets/customer-assets.component'

import { CustomerViewComponent } from './pages/customer-view/customer-view.component'
import { CustomerGroupComponent } from './pages/customer-group/customer-group.component'
import { CustomerTagComponent } from './pages/customer-tag/customer-tag.component'
import { CustomerSelectComponent } from './pages/customer-select/customer-select.component'
import { TagDetailComponent } from './pages/tag-detail/tag-detail.component'
import { TagCreateComponent } from './pages/tag-create/tag-create.component'
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component'

const routes: Routes = [
  { path: 'customer/customer-list', component: CustomerListComponent },
  { path: 'customer/customer-view', component: CustomerViewComponent },
  { path: 'customer/customer-group', component: CustomerGroupComponent },
  { path: 'customer/customer-tag', component: CustomerTagComponent },
  { path: 'customer/customer-level', component: CustomerLevelComponent },
  { path: 'customer/customer-assets', component: CustomerAssetsComponent },
  { path: 'customer/customer-select', component: CustomerSelectComponent },
  { path: 'customer/tag-detail', component: TagDetailComponent },
  { path: 'customer/tag-create', component: TagCreateComponent },
  { path: 'customer/customer-detail', component: CustomerDetailComponent }
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
