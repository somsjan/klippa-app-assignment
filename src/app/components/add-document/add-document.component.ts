import { Component } from '@angular/core';
import { FinancialFullService } from "../../services/financial-full.service";
import { DocumentFinancialModel } from "../../models/document-financial.model";

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent {

  public selectedFile: File;
  public uploadedFile: Partial<DocumentFinancialModel>;
  public apiKey: string = '';

  public isProcessing: boolean = false;

  constructor(
    private parseDocumentService: FinancialFullService,
  ) {
  }

  public onFileSelected(event) {
    const selectedFile: File = event.target.files[0];

    if (selectedFile) {
      this.selectedFile = selectedFile;
      this.uploadedFile = undefined;
    }
  }

  public async startUpload() {
    this.isProcessing = true;
    this.uploadedFile = await this.parseDocumentService.postDocument(this.selectedFile, this.apiKey);
    this.selectedFile = undefined;
    this.isProcessing = false;
  }

}
