import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ContentHeaderComponent } from './layout/content-header/content-header.component';
import { ElementsModule } from "../elements/elements.module";
import { ContentBodyComponent } from "./layout/content-body/content-body.component";
import { DocumentItemComponent } from './document-item/document-item.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { DocumentListComponent } from "./document-list/document-list.component";

@NgModule({
  declarations: [
    ContentHeaderComponent,
    ContentBodyComponent,
    DocumentItemComponent,
    DocumentListComponent,
    AddDocumentComponent,
    InputBoxComponent,
  ],
  exports: [
    ContentHeaderComponent,
    ContentBodyComponent,
    DocumentItemComponent,
    DocumentListComponent,
    AddDocumentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ElementsModule,
  ]
})
export class ComponentsModule { }
