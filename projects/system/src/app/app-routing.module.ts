import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { ParamsConfigComponent } from './pages/params-config/params-config.component'

const routes: Routes = [{ path: 'system/params-config', component: ParamsConfigComponent }]

routes.push({
  path: environment.production ? '' : 'system',
  redirectTo: '/system/params-config',
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
