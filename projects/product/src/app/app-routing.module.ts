import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { ProductListComponent } from './pages/product-list/product-list.component'
import { ProductDetailComponent } from './pages/product-detail/product-detail.component'
import { ComboListComponent } from './pages/combo-list/combo-list.component'
import { ComboDetailComponent } from './pages/combo-detail/combo-detail.component'
import { ProductDocumentComponent } from './pages/product-document/product-document.component'
import { AttentionListComponent } from './pages/attention-list/attention-list.component'

const routes: Routes = [
  { path: 'product/product-list', component: ProductListComponent },
  { path: 'product/product-detail', component: ProductDetailComponent },
  { path: 'product/combo-list', component: ComboListComponent },
  { path: 'product/combo-detail', component: ComboDetailComponent },
  { path: 'product/product-document', component: ProductDocumentComponent },
  { path: 'product/attention-list', component: AttentionListComponent }
]

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
