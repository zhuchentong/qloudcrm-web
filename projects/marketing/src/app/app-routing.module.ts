import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { ActivityListComponent } from './pages/activity-list/activity-list.component'

const routes: Routes = [{ path: 'marketing/activity-list', component: ActivityListComponent }]

routes.push({
  path: environment.production ? '' : 'marketing',
  redirectTo: '/marketing/activity-list',
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