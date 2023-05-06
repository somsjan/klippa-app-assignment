import { Component } from '@angular/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {

  constructor() {
    this.getDocumentList();
  }

  public getDocumentList() {
    console.log('get document list');
  }

}
