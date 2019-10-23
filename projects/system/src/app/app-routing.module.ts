import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { ParamsConfigComponent } from './pages/params-config/params-config.component'
import { LogsConfigComponent } from './pages/logs-config/logs-config.component'
import { PasswdConfigComponent } from './pages/passwd-config/passwd-config.component'
import { RolesConfigComponent } from './pages/roles-config/roles-config.component'
const routes: Routes = [
  { path: 'system/params-config', component: ParamsConfigComponent },
  { path: 'system/logs-config', component: LogsConfigComponent },
  { path: 'system/passwd-config', component: PasswdConfigComponent },
  { path: 'system/roles-config', component: RolesConfigComponent },
]

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
