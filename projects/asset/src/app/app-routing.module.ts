import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { FinancialPlanComponent } from './pages/financial-plan/financial-plan.component'
import { FinanicalConfigComponent } from './pages/finanical-config/finanical-config.component'
import { FinanicalComboComponent } from './pages/finanical-combo/finanical-combo.component'

const routes: Routes = [
  { path: 'asset/financial-plan', component: FinancialPlanComponent },
  { path: 'asset/financial-config', component: FinanicalConfigComponent },
  { path: 'asset/financial-combo', component: FinanicalComboComponent }
]

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
