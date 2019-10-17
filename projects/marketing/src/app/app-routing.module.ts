import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { ActivityListComponent } from './pages/activity-list/activity-list.component'
import { ExploreListComponent } from './pages/explore-list/explore-list.component'
import { ApprovalListComponent } from './pages/approval-list/approval-list.component'
import { ActivilyMonitorComponent } from './pages/activily-monitor/activily-monitor.component'
import { ActivilyCommentComponent } from './pages/activily-comment/activily-comment.component'
import { RecommendListComponent } from './pages/recommend-list/recommend-list.component'
import { TemplateFilterComponent } from './pages/template-filter/template-filter.component'
import { TemplateDetailComponent } from './pages/template-detail/template-detail.component'

const routes: Routes = [
  { path: 'marketing/activity-list', component: ActivityListComponent },
  { path: 'marketing/expore-list', component: ExploreListComponent },
  { path: 'marketing/approval-list', component: ApprovalListComponent },
  { path: 'marketing/activity-monitor', component: ActivilyMonitorComponent },
  { path: 'marketing/activity-comment', component: ActivilyCommentComponent },
  { path: 'marketing/recommend-list', component: RecommendListComponent },
  { path: 'marketing/template-filter', component: TemplateFilterComponent },
  { path: 'marketing/template-detail', component: TemplateDetailComponent }
]

routes.push({
  path: environment.production ? '' : 'marketing',
  redirectTo: '/marketing/expore-list',
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
