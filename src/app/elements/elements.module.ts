import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonElement } from "./button/button.element";

@NgModule({
  declarations: [
    ButtonElement,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonElement,
  ]
})
export class ElementsModule { }
