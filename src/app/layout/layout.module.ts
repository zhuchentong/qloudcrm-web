import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '@shared/shared.module'
import { DefaultLayoutComponent } from './default/default.component'
import { HeaderComponent } from './components/header/header.component'
import { SideMenuComponent } from './components/side-menu/side-menu.component'
import { HeaderMenuComponent } from './components/header-menu/header-menu.component'
import { FormBuilderComponent } from './components/form-builder/form-builder.component'

const LAYOUTS = [DefaultLayoutComponent]
const COMPONENTS = [HeaderComponent, SideMenuComponent, HeaderMenuComponent, FormBuilderComponent]

@NgModule({
  imports: [SharedModule],
  declarations: [...LAYOUTS, ...COMPONENTS],
  providers: [],
  entryComponents: [...LAYOUTS, ...COMPONENTS],
  exports: [...LAYOUTS]
})
export class LayoutModule {}
