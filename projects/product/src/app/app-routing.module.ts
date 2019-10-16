import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { ProductListComponent } from './pages/product-list/product-list.component'

const routes: Routes = [{ path: 'product/product-list', component: ProductListComponent }]

routes.push({
  path: environment.production ? '' : 'product',
  redirectTo: '/product/product-list',
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
