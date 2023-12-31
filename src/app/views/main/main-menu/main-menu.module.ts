import {NgModule} from '@angular/core';
import {CategoryMenuComponent} from "./components/category-menu/category-menu.component";
import {LevelMenuComponent} from "./components/level-menu/level-menu.component";
import {MainMenuComponent} from "./main-menu.component";
import {CommonModule} from "@angular/common";
import { VariantComponent } from './components/variant/variant.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    MainMenuComponent,
    CategoryMenuComponent,
    LevelMenuComponent,
    VariantComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  providers: [],
  exports: [MainMenuComponent],
})
export class MainMenuModule {
}
