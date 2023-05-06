import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ElementsModule } from "../elements/elements.module";
import { ContentBodyComponent } from "./content-body/content-body.component";
import { DocumentListComponent } from './document-list/document-list.component';

@NgModule({
  declarations: [
    ContentHeaderComponent,
    ContentBodyComponent,
    DocumentListComponent,
  ],
  exports: [
    ContentHeaderComponent,
    ContentBodyComponent,
    DocumentListComponent,
  ],
  imports: [
    CommonModule,
    ElementsModule,
  ]
})
export class ComponentsModule { }
