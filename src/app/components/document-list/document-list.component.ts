import { Component } from '@angular/core';
import { LocalStorageKey, LocalStorageService } from "../../services/utility/local-storage.service";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {

  public isLoading: boolean = false;
  public documentHistory: any[] = [];

  constructor(
    private localStorageService: LocalStorageService,
  ) {
    this.getDocumentHistory();
  }

  public async getDocumentHistory() {
    this.isLoading = true;
    this.documentHistory = this.localStorageService.readStorage(LocalStorageKey.FINANCIAL_DOCUMENT_HISTORY);
    this.isLoading = false;
  }

}
