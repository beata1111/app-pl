import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {MainComponent} from "./main.component";
import {MainRoutingModule} from "./main-routing.module";
import {ContainerModule, MenuItemModule, TopNavModule, AchievementRibbonModule} from "@components";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MainMenuModule} from "./main-menu/main-menu.module";
import {ButtonModule, NavContainerModule} from "@components";

@NgModule({
  declarations: [MainComponent],
  imports: [
    MainRoutingModule,
    CommonModule,
    ContainerModule,
    FontAwesomeModule,
    MenuItemModule,
    TopNavModule,
    AchievementRibbonModule,
    MainMenuModule,
    ButtonModule,
    NavContainerModule,
  ]
})
export class MainModule {}
