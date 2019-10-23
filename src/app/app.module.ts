import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutModule } from './layout/layout.module'
import { SharedModule } from '@shared/shared.module'
import { CoreModule } from './core/core.module'

import { AppDashboardModule } from 'projects/dashboard/src/app/app.module'
import { AppCustomerModule } from 'projects/customer/src/app/app.module'
import { AppMarketingModule } from 'projects/marketing/src/app/app.module'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppProductModule } from 'projects/product/src/app/app.module'
import { AppSystemModule } from 'projects/system/src/app/app.module'
import { AppEventModule } from 'projects/event/src/app/app.module'
import { AppPerformanceModule } from 'projects/performance/src/app/app.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    CoreModule.forRoot(),
    LayoutModule,
    AppRoutingModule,
    AppDashboardModule.forRoot(),
    AppCustomerModule.forRoot(),
    AppMarketingModule.forRoot(),
    AppProductModule.forRoot(),
    AppSystemModule.forRoot(),
    AppEventModule.forRoot(),
    AppPerformanceModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
