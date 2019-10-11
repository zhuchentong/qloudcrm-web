import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { environment } from '../environments/environment'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import {DesignComponent} from "./pages/design/design.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/design', component: DesignComponent }]

routes.push({
  path: '',
  redirectTo: '/dashboard',
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
