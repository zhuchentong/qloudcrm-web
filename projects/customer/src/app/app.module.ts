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
import { TagDetailComponent } from './pages/tag-detail/tag-detail.component'
import { ApiService } from './services/api.service'
import { TagCreateComponent } from './pages/tag-create/tag-create.component'
import { TagCreateCustomerComponent } from './components/tag-create-customer/tag-create-customer.component'
import { TagCreateProductComponent } from './components/tag-create-product/tag-create-product.component'
import { TagCreateGroupComponent } from './components/tag-create-group/tag-create-group.component'
import { SelectCreateComponent } from './components/select-create/select-create.component'
import { AddGroupComponent } from './pages/add-group/add-group.component'
import { MyAssignComponent } from './pages/my-assign/my-assign.component'
import { CustomerAssignComponent } from './pages/customer-assign/customer-assign.component'
import { CustomerSetreceverComponent } from './pages/customer-setrecever/customer-setrecever.component'
import { CustomerSearchComponent } from './pages/customer-search/customer-search.component'

// 页面列表
const PAGES = [
  CustomerListComponent,
  CustomerViewComponent,
  CustomerGroupComponent,
  CustomerTagComponent,
  CustomerLevelComponent,
  CustomerAssetsComponent,
  CustomerSelectComponent,
  TagDetailComponent,
  TagCreateComponent,
  AddGroupComponent,
  CustomerAssignComponent,
  MyAssignComponent,
  CustomerSetreceverComponent,
  CustomerSearchComponent
]

// 组件列表
const COMPONENTS = [
  SearchComponent,
  CustomerDetailComponent,
  // CustomerAddgroupComponent,
  TagCreateCustomerComponent,
  TagCreateProductComponent,
  TagCreateGroupComponent,
  SelectCreateComponent
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
