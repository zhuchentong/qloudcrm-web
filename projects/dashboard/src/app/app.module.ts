import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core'
import * as $ from 'jquery'
import { CoreModule } from '@app/core/core.module'
import { SharedModule } from '@shared/shared.module'
import { APP_BASE_HREF } from '@angular/common'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import config from '../assets/config.json'

import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { DesignComponent } from './pages/design/design.component'
import { Store } from '@ngxs/store'
import { UpdateMenuAction } from '@app/store/action/layout.action'

import { GridsterModule } from 'angular-gridster2'
import { NgxEchartsModule } from 'ngx-echarts'

import { TaskComponent } from './pages/public-asset/task/task.component'
import { InvestTypeComponent } from './pages/public-asset/invest-type/invest-type.component'
import { RiskMoneyComponent } from './pages/public-asset/risk-money/risk-money.component'
import { AssetProportionComponent } from './pages/public-asset/asset-proportion/asset-proportion.component'
import { RiskEvaluationRateComponent } from './pages/public-asset/risk-evaluation-rate/risk-evaluation-rate.component'
import { CalendarComponent } from './pages/public-asset/calendar/calendar.component'
import { ProfitTypeComponent } from './pages/public-asset/profit-type/profit-type.component'
import { PublicAssetComponent } from './pages/public-asset/public-asset.component'
import { TaskSubmitComponent } from './pages/public-asset/task-submit/task-submit.component'

import { LeverageRatioComponent } from './pages/public-asset/leverage-ratio/leverage-ratio.component'
import { IndustryConcentrateComponent } from './pages/public-asset/industry-concentrate/industry-concentrate.component'
import { ReserveMoneyComponent } from './pages/public-asset/reserve-money/reserve-money.component'
import { CompaignComponent } from './pages/public-asset/compaign/compaign.component'
import { CampaignActivityComponent } from './pages/public-asset/campaign-activity/campaign-activity.component'
import { CampaignCustomerComponent } from './pages/public-asset/campaign-customer/campaign-customer.component'
import { CustomerCountComponent } from './pages/public-asset/customer-count/customer-count.component'
import { CustomerAumComponent } from './pages/public-asset/customer-aum/customer-aum.component'

// ????????????
const PAGES = [DashboardComponent, DesignComponent]
// ????????????
const COMPONENTS = [
  AssetProportionComponent,
  RiskMoneyComponent,
  RiskEvaluationRateComponent,
  LeverageRatioComponent,
  IndustryConcentrateComponent,
  ReserveMoneyComponent,
  InvestTypeComponent,
  ProfitTypeComponent,
  CalendarComponent,
  PublicAssetComponent,
  TaskComponent,
  TaskSubmitComponent,
  CompaignComponent,
  CampaignActivityComponent,
  CampaignCustomerComponent,
  CustomerCountComponent,
  CustomerAumComponent
]

const dashboardStartUp = (store: Store) => async () => {
  // ????????????
  store.dispatch(new UpdateMenuAction(config))
}

const providers = [
  {
    provide: APP_INITIALIZER,
    useFactory: dashboardStartUp,
    deps: [Store],
    multi: true
  }
]

export class ConfigModule {}
@NgModule({
  declarations: [AppComponent, ...PAGES, ...COMPONENTS],
  entryComponents: [...COMPONENTS],
  imports: [SharedModule, CoreModule.forRoot(), AppRoutingModule, NgxEchartsModule, GridsterModule],
  providers,
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}

@NgModule({})
export class AppDashboardModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers
    }
  }

  public static getConfig() {
    return config
  }
}
