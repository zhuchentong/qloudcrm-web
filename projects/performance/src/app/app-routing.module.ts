import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { PerformanceQuotaComponent } from './pages/performance-quota/performance-quota.component'
import { PerformanceStatisticComponent } from './pages/performance-statistic/performance-statistic.component'

const routes: Routes = [
  { path: 'performance/performance-quota', component: PerformanceQuotaComponent },
  { path: 'performance/performance-statistic', component: PerformanceStatisticComponent }
]

routes.push({
  path: environment.production ? '' : 'performance',
  redirectTo: '/performance/performance-quota',
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
