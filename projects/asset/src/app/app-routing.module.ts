import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { PerformanceRankComponent } from './pages/performance-rank/performance-rank.component'
import { PerformanceQuotaComponent } from './pages/performance-quota/performance-quota.component'
import { FinancialPlanComponent } from './pages/financial-plan/financial-plan.component'

const routes: Routes = [{ path: 'asset/financial-plan', component: FinancialPlanComponent }]

routes.push({
  path: environment.production ? '' : 'asset',
  redirectTo: '/asset/financial-plan',
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
