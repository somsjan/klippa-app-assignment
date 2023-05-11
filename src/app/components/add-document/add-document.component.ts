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
  public uploadFileResult: DocumentFinancialModel;
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
      this.uploadFileResult = undefined;
    }
  }

  public uploadIsDisabled(): boolean {
    return this.isProcessing || !this.apiKey.length;
  }

  public async startUpload() {
    this.isProcessing = true;
    this.uploadFileResult = await this.parseDocumentService.postDocument(this.selectedFile, this.apiKey);
    this.selectedFile = undefined;
    this.isProcessing = false;
  }

}
