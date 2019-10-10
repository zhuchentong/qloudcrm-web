import { NgModule, Optional, SkipSelf, ModuleWithProviders, APP_INITIALIZER } from '@angular/core'
import { CommonModule, APP_BASE_HREF } from '@angular/common'
import { throwIfAlreadyLoaded } from './module-import-guard'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { DefaultInterceptor } from './interceptors/default.interceptor'
import { EmptyInterceptor } from './interceptors/empty.interceptor'
import { StartupService } from './startup/startup.service'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { NgxsModule } from '@ngxs/store'
import { environment } from 'src/environments/environment'
import { states } from '@app/store'
import { NgxEchartsModule } from 'ngx-echarts'

const GLOBAL_THIRD_MODULES = [
  NgxsModule.forRoot(states, { developmentMode: !environment.production }),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsStoragePluginModule.forRoot(),
  NgxEchartsModule
]

const startupFactory = (startupService: StartupService) => () => startupService.load()

const appBaseHrefFactory = () => '/'
@NgModule({
  declarations: [],
  imports: [CommonModule, ...GLOBAL_THIRD_MODULES],
  exports: [NgxEchartsModule, NgxsModule, NgxsReduxDevtoolsPluginModule, NgxsStoragePluginModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        StartupService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: EmptyInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: DefaultInterceptor,
          multi: true
        },
        {
          provide: APP_INITIALIZER,
          useFactory: startupFactory,
          deps: [StartupService],
          multi: true
        },
        {
          provide: APP_BASE_HREF,
          useFactory: appBaseHrefFactory
        }
      ]
    }
  }
}
