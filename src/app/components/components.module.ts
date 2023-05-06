import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ContentHeaderComponent } from './content-header/content-header.component';
import { ElementsModule } from "../elements/elements.module";
import { ContentBodyComponent } from "./content-body/content-body.component";
import { DocumentListComponent } from './document-list/document-list.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { InputBoxComponent } from './input-box/input-box.component';

@NgModule({
  declarations: [
    ContentHeaderComponent,
    ContentBodyComponent,
    DocumentListComponent,
    AddDocumentComponent,
    InputBoxComponent,
  ],
  exports: [
    ContentHeaderComponent,
    ContentBodyComponent,
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
