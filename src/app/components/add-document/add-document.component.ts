import { Component } from '@angular/core';
import { DocumentModel } from "../../models/document.model";

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent {

  public newDocument: DocumentModel = {
    description: '',
  };

  constructor() {
  }

}
