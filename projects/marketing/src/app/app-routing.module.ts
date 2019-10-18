import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { ActivityListComponent } from './pages/activity-list/activity-list.component'
import { ConflictListComponent } from './pages/conflict-list/conflict-list.component'
import { ChannelListComponent } from './pages/channel-list/channel-list.component'
import { ConflictDetialComponent } from './pages/conflict-detial/conflict-detial.component'
import { ExploreListComponent } from './pages/explore-list/explore-list.component'
import { ApprovalListComponent } from './pages/approval-list/approval-list.component'
import { ActivilyMonitorComponent } from './pages/activily-monitor/activily-monitor.component'
import { ActivilyCommentComponent } from './pages/activily-comment/activily-comment.component'
import { RecommendListComponent } from './pages/recommend-list/recommend-list.component'
import { ExploreCreateComponent } from './pages/explore-create/explore-create.component'
import { TemplateFilterComponent } from './pages/template-filter/template-filter.component'
import { TemplateDetailComponent } from './pages/template-detail/template-detail.component'
import { ActivityCreateComponent } from './pages/activity-create/activity-create.component'
import { AddTemplateComponent } from './pages/add-template/add-template.component'
import { RecommendDetialComponent } from './pages/recommend-detial/recommend-detial.component'

const routes: Routes = [
  { path: 'marketing/activity-list', component: ActivityListComponent },
  { path: 'marketing/explore-list', component: ExploreListComponent },
  { path: 'marketing/approval-list', component: ApprovalListComponent },
  { path: 'marketing/activity-monitor', component: ActivilyMonitorComponent },
  { path: 'marketing/activity-comment', component: ActivilyCommentComponent },
  { path: 'marketing/activity-create', component: ActivityCreateComponent },
  { path: 'marketing/recommend-list', component: RecommendListComponent },
  { path: 'marketing/recommend-detail/:id', component: RecommendDetialComponent },
  { path: 'marketing/explore-create', component: ExploreCreateComponent },
  { path: 'marketing/conflict-list', component: ConflictListComponent },
  { path: 'marketing/channel-list', component: ChannelListComponent },
  { path: 'marketing/conflict-detial/:id', component: ConflictDetialComponent },
  { path: 'marketing/template-filter', component: TemplateFilterComponent },
  { path: 'marketing/template-detail', component: TemplateDetailComponent },
  { path: 'marketing/add-template', component: AddTemplateComponent }
]

routes.push({
  path: environment.production ? '' : 'marketing',
  redirectTo: '/marketing/explore-list',
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
