import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonElement } from "./button/button.element";
import { InputComponent } from './input/input.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ButtonElement,
    InputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
    exports: [
        ButtonElement,
        InputComponent,
    ]
})
export class ElementsModule { }
