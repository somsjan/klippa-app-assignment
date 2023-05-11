import { Component, Input } from '@angular/core';
import { DocumentFinancialModel } from "../../models/document-financial.model";

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.scss']
})
export class DocumentItemComponent {

  @Input()
  document: Partial<DocumentFinancialModel>;

  @Input()
  cssClass: '' | 'success' = '';

  constructor(
  ) {
  }

}
