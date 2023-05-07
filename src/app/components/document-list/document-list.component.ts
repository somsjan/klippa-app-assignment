import { Component } from '@angular/core';
import { FinancialFullService } from "../../services/financialFull.service";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {

  public isLoading: boolean = false;
  public receiptList: any[] = [];

  constructor(
    private parseDocumentService: FinancialFullService,
  ) {
    this.getDocumentList();
  }

  public async getDocumentList() {
    this.isLoading = true;
    await this.parseDocumentService.getReceipts();
    this.isLoading = false;
  }

}
