import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { ActivityListComponent } from './pages/activity-list/activity-list.component'
import { ConflictListComponent } from './pages/conflict-list/conflict-list.component'
import { ChannelListComponent } from './pages/channel-list/channel-list.component'
import { ConflictDetialComponent } from './pages/conflict-detial/conflict-detial.component'

const routes: Routes = [{ path: 'marketing/activity-list', component: ActivityListComponent },
  { path: 'marketing/conflict-list', component: ConflictListComponent },
  { path: 'marketing/channel-list', component: ChannelListComponent },
  { path: 'marketing/conflict-detial/:id', component: ConflictDetialComponent}
                        ]

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
