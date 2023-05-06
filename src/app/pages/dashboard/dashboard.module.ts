import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './dashboard.page';
import { RouterModule, Routes } from "@angular/router";
import { ElementsModule } from "../../elements/elements.module";
import { ComponentsModule } from "../../components/components.module";

const routes: Routes = [{
  path: '',
  component: DashboardPage,
}];

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ElementsModule,
    ComponentsModule,
  ],
  exports: [

  ]
})
export class DashboardModule { }
