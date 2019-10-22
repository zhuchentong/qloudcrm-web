import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { EventListComponent } from './pages/event-list/event-list.component'
import { EventCreateComponent } from './pages/event-create/event-create.component'
import { EventAnalysisComponent } from './pages/event-analysis/event-analysis.component'
import { EventDetailComponent } from './pages/event-detail/event-detail.component'


const routes: Routes = [
  { path: 'event/event-list', component: EventListComponent },
  { path: 'event/event-create', component: EventCreateComponent},
  { path: 'event/event-detail', component: EventDetailComponent },
  { path: 'event/event-analysis', component: EventAnalysisComponent }
]

routes.push({
  path: environment.production ? '' : 'event',
  redirectTo: '/event/event-list',
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
export class AppRoutingModule {
}
