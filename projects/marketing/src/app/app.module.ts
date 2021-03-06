import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core'

import { CoreModule } from '@app/core/core.module'
import { SharedModule } from '@shared/shared.module'
import { APP_BASE_HREF } from '@angular/common'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import config from '../assets/config.json'

import { Store, NgxsModule } from '@ngxs/store'
import { UpdateMenuAction } from '@app/store/action/layout.action'
import { ApiService } from './services/api.service'
import { ActivityListComponent } from './pages/activity-list/activity-list.component'
import { ConflictListComponent } from './pages/conflict-list/conflict-list.component'
import { QlDateModule } from 'qloud-angular/package/date-picker/module'
import { ChannelListComponent } from './pages/channel-list/channel-list.component'
import { ConflictDetialComponent } from './pages/conflict-detial/conflict-detial.component'
import { ExploreListComponent } from './pages/explore-list/explore-list.component'
import { ApprovalListComponent } from './pages/approval-list/approval-list.component'
import { ActivilyCommentComponent } from './pages/activily-comment/activily-comment.component'
import { RecommendListComponent } from './pages/recommend-list/recommend-list.component'
import { ExploreCreateComponent } from './pages/explore-create/explore-create.component'
import { ActivityCreateComponent } from './pages/activity-create/activity-create.component'
import { TemplateFilterComponent } from './pages/template-filter/template-filter.component'
import { TemplateDetailComponent } from './pages/template-detail/template-detail.component'
import { TagComponent } from './components/tag/tag.component'
import { AddTemplateComponent } from './pages/add-template/add-template.component'
import { SelectCustomerComponent } from './components/select-customer/select-customer.component'
import { SelectPruductComponent } from './components/select-pruduct/select-pruduct.component'
import { SelectEventComponent } from './components/select-event/select-event.component'
import { SelectInterestComponent } from './components/select-interest/select-interest.component'
import { SelectExploreComponent } from './components/select-explore/select-explore.component'
import { RecommendDetialComponent } from './pages/recommend-detial/recommend-detial.component'
import { ExploreResultComponent } from './pages/explore-result/explore-result.component'
import { ActivityDetailComponent } from './pages/activity-detail/activity-detail.component'
import { ApprovalDetailComponent } from './pages/approval-detail/approval-detail.component'
import { EquitiesListComponent } from './pages/equities-list/equities-list.component'
import { EquitiesCreateComponent } from './pages/equities-create/equities-create.component'
import { ExploreConditionComponent } from './pages/explore-condition/explore-condition.component'
import { EquitiesDetailComponent } from './pages/equities-detail/equities-detail.component'
import { MonitorListComponent } from './pages/monitor-list/monitor-list.component'
import { MonitorDetailComponent } from './pages/monitor-detail/monitor-detail.component'
import { ActivityStatistComponent } from './pages/activity-statist/activity-statist.component'
import { states } from './store'

// ????????????
const PAGES = [
  ActivityListComponent,
  ExploreListComponent,
  ApprovalListComponent,
  ActivilyCommentComponent,
  RecommendListComponent,
  ExploreCreateComponent,
  ConflictListComponent,
  ConflictDetialComponent,
  TemplateFilterComponent,
  TemplateDetailComponent,
  TagComponent,
  ChannelListComponent,
  ActivityCreateComponent,
  AddTemplateComponent,
  RecommendDetialComponent,
  ExploreResultComponent,
  EquitiesListComponent,
  EquitiesCreateComponent,
  ExploreConditionComponent,
  EquitiesDetailComponent,
  ExploreResultComponent,
  ActivityDetailComponent,
  ApprovalDetailComponent,
  MonitorListComponent,
  MonitorDetailComponent,
  ActivityStatistComponent
]

// ????????????
const COMPONENTS = [
  TagComponent,
  SelectCustomerComponent,
  SelectPruductComponent,
  SelectEventComponent,
  SelectInterestComponent,
  SelectExploreComponent
]

const startUpFactory = (store: Store) => async () => {
  // ????????????
  store.dispatch(new UpdateMenuAction(config))
}

const providers = [
  ApiService,
  {
    provide: APP_INITIALIZER,
    useFactory: startUpFactory,
    deps: [Store],
    multi: true
  }
]

export class ConfigModule {}
@NgModule({
  declarations: [AppComponent, ...PAGES, ...COMPONENTS, ActivityStatistComponent],
  entryComponents: [...COMPONENTS],
  imports: [NgxsModule.forFeature(states), SharedModule, CoreModule.forRoot(), AppRoutingModule, QlDateModule],
  providers,
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}

@NgModule({})
export class AppMarketingModule {
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
