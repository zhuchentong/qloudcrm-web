import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core'

import { CoreModule } from '@app/core/core.module'
import { SharedModule } from '@shared/shared.module'
import { APP_BASE_HREF } from '@angular/common'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import config from '../assets/config.json'

import { Store } from '@ngxs/store'
import { UpdateMenuAction } from '@app/store/action/layout.action'
import { ApiService } from './services/api.service'
import { ActivityListComponent } from './pages/activity-list/activity-list.component'
import { ConflictListComponent } from './pages/conflict-list/conflict-list.component'
import { QlDateModule } from 'qloud-angular/package/date-picker/module'
import { ChannelListComponent } from './pages/channel-list/channel-list.component'
import { ConflictDetialComponent } from './pages/conflict-detial/conflict-detial.component'
import { ExploreListComponent } from './pages/explore-list/explore-list.component'
import { ApprovalListComponent } from './pages/approval-list/approval-list.component'
import { ActivilyMonitorComponent } from './pages/activily-monitor/activily-monitor.component'
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
import { RecommendDetialComponent } from './pages/recommend-detial/recommend-detial.component';
import { ExploreResultComponent } from './pages/explore-result/explore-result.component'
import { EquitiesListComponent } from './pages/equities-list/equities-list.component';
import { EquitiesCreateComponent } from './pages/equities-create/equities-create.component';
<<<<<<< HEAD
import { ExploreConditionComponent } from './pages/explore-condition/explore-condition.component'
=======
import { EquitiesDetailComponent } from './pages/equities-detail/equities-detail.component'
>>>>>>> a74456b436ee1c9020f1f9226d75e058e0680634

// 页面列表
const PAGES = [
  ActivityListComponent,
  ExploreListComponent,
  ApprovalListComponent,
  ActivilyMonitorComponent,
  ActivilyCommentComponent,
  RecommendListComponent,
  ExploreCreateComponent,
  ConflictListComponent,
  ConflictDetialComponent,
  ChannelListComponent,
  TemplateFilterComponent,
  TemplateDetailComponent,
  TemplateFilterComponent,
  TemplateDetailComponent,
  TagComponent,
  ChannelListComponent,
  ConflictDetialComponent,
  ActivityCreateComponent,
  AddTemplateComponent,
  RecommendDetialComponent,
  ExploreResultComponent,
  EquitiesListComponent,
  EquitiesCreateComponent,
<<<<<<< HEAD
  ExploreConditionComponent
=======
  EquitiesDetailComponent
>>>>>>> a74456b436ee1c9020f1f9226d75e058e0680634
]

// 组件列表
const COMPONENTS = [
  TagComponent,
  SelectCustomerComponent,
  SelectPruductComponent,
  SelectEventComponent,
  SelectInterestComponent,
  SelectExploreComponent,
  ExploreResultComponent
]

const startUpFactory = (store: Store) => async () => {
  // 注册菜单
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
  declarations: [AppComponent, ...PAGES, ...COMPONENTS, ExploreResultComponent, ExploreConditionComponent],
  entryComponents: [...COMPONENTS],
  imports: [SharedModule, CoreModule.forRoot(), AppRoutingModule, QlDateModule],
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
