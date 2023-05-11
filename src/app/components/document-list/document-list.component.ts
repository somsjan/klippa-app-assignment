import { Component } from '@angular/core';
import { FinancialFullService } from "../../services/financial-full.service";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {

  public isLoading: boolean = false;
  public documentHistory: any[] = [];

  constructor(
    private financialFullService: FinancialFullService,
  ) {
    this.getDocumentHistory();
  }

  public async getDocumentHistory() {
    this.isLoading = true;
    this.documentHistory = this.financialFullService.getHistory() ?? [];
    this.isLoading = false;
  }

}
