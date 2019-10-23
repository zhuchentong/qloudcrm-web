import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { PerformanceRankComponent } from './pages/performance-rank/performance-rank.component'
import { PerformanceQuotaComponent } from './pages/performance-quota/performance-quota.component'

const routes: Routes = [
  { path: 'performance/performance-rank', component: PerformanceRankComponent },
  { path: 'performance/performance-quota', component: PerformanceQuotaComponent }
]

routes.push({
  path: environment.production ? '' : 'system',
  redirectTo: '/performance/performance-rank',
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
