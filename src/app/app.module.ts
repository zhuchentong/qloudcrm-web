import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutModule } from './layout/layout.module'
import { SharedModule } from '@shared/shared.module'
import { CoreModule } from './core/core.module'

import { AppDashboardModule } from 'projects/dashboard/src/app/app.module'
import { AppCustomerModule } from 'projects/customer/src/app/app.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    CoreModule.forRoot(),
    LayoutModule,
    AppRoutingModule,
    AppDashboardModule.forRoot(),
    AppCustomerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
