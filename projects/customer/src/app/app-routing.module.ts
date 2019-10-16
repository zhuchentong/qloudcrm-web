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
import { AddGroupComponent } from './pages/add-group/add-group.component'
import { MyAssignComponent } from './pages/my-assign/my-assign.component'
import { CustomerAssignComponent } from './pages/customer-assign/customer-assign.component'
import { CustomerSetreceverComponent } from './pages/customer-setrecever/customer-setrecever.component'
import { CustomerSearchComponent } from './pages/customer-search/customer-search.component'
import { TagSearchComponent } from './pages/tag-search/tag-search.component'
import { TagViewComponent } from './pages/tag-view/tag-view.component'

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
  { path: 'customer/customer-detail', component: CustomerDetailComponent },
  { path: 'customer/add-group', component: AddGroupComponent },
  { path: 'customer/my-assign', component: MyAssignComponent },
  { path: 'customer/customer-assign', component: CustomerAssignComponent },
  { path: 'customer/customer-setrecever', component: CustomerSetreceverComponent },
  { path: 'customer/customer-search', component: CustomerSearchComponent },
  { path: 'customer/tag-search', component: TagSearchComponent },
  { path: 'customer/tag-view', component: TagViewComponent }
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
