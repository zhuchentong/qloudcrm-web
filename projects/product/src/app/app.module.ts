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
import { ProductListComponent } from './pages/product-list/product-list.component'
import { ProductDetailComponent } from './pages/product-detail/product-detail.component'
import { ComboDetailComponent } from './pages/combo-detail/combo-detail.component'
import { ComboListComponent } from './pages/combo-list/combo-list.component'
import { ComboCreateComponent } from './pages/combo-create/combo-create.component'
import { AttentionListComponent } from './pages/attention-list/attention-list.component'
import { ProductDocumentComponent } from './pages/product-document/product-document.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component'

// 页面列表
const PAGES = [
  ProductListComponent,
  ProductDetailComponent,
  ComboDetailComponent,
  ComboListComponent,
  ComboCreateComponent,
  AttentionListComponent,
  ProductDocumentComponent
]

// 组件列表
const COMPONENTS = []

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
  declarations: [AppComponent, ...PAGES, ...COMPONENTS, ProductCreateComponent],
  entryComponents: [...COMPONENTS],
  imports: [SharedModule, CoreModule.forRoot(), AppRoutingModule],
  providers,
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}

@NgModule({})
export class AppProductModule {
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
