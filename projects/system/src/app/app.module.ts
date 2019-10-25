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
import { ParamsConfigComponent } from './pages/params-config/params-config.component'
import { LogsConfigComponent } from './pages/logs-config/logs-config.component'
import { PasswdConfigComponent } from './pages/passwd-config/passwd-config.component'
import { RolesConfigComponent } from './pages/roles-config/roles-config.component'
import { ParamsDetailComponent } from './pages/params-config/params-detail/params-detail.component'
import { RolesDetailComponent } from './pages/roles-config/roles-detail/roles-detail.component'
import { UserListComponent } from './pages/roles-config/user-list/user-list.component'
import { ParamsQuotaComponent } from './pages/params-config/params-quota/params-quota.component'
// 页面列表
const PAGES = [ParamsConfigComponent,LogsConfigComponent,PasswdConfigComponent,RolesConfigComponent]

// 组件列表
const COMPONENTS = [ParamsQuotaComponent,ParamsDetailComponent,RolesDetailComponent,UserListComponent]

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
  declarations: [AppComponent, ...PAGES, ...COMPONENTS],
  entryComponents: [...COMPONENTS],
  imports: [SharedModule, CoreModule.forRoot(), AppRoutingModule],
  providers,
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}

@NgModule({})
export class AppSystemModule {
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
