import { Component, ViewChild } from '@angular/core';
import { DocumentListComponent } from "../../components/document-list/document-list.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage {

  @ViewChild(DocumentListComponent)
  documentListComponent: DocumentListComponent | undefined;

  constructor() {
  }

  public onAdd() {
    this.documentListComponent?.getDocumentList();
  }

}
