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

import { CustomerListComponent } from './pages/customer-list/customer-list.component'
import { CustomerViewComponent } from './pages/customer-view/customer-view.component'
import { CustomerGroupComponent } from './pages/customer-group/customer-group.component'
import { CustomerTagComponent } from './pages/customer-tag/customer-tag.component'
import { CustomerSelectComponent } from './pages/customer-select/customer-select.component'
import { CustomerLevelComponent } from './pages/customer-level/customer-level.component'
import { CustomerAssetsComponent } from './pages/customer-assets/customer-assets.component'
import { SearchComponent } from './components/search/search.component'
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component'

// 页面列表
const PAGES = [
  CustomerListComponent,
  CustomerViewComponent,
  CustomerGroupComponent,
  CustomerTagComponent,
  CustomerLevelComponent,
  CustomerAssetsComponent,
  CustomerSelectComponent
]

// 组件列表
const COMPONENTS = [SearchComponent, CustomerDetailComponent]

const dashboardStartUp = (store: Store) => async () => {
  // 注册菜单
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
  imports: [SharedModule, CoreModule.forRoot(), AppRoutingModule],
  providers,
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}

@NgModule({})
export class AppCustomerModule {
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
