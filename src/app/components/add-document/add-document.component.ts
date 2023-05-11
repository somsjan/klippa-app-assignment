import { Component, EventEmitter, Output } from '@angular/core';
import { FinancialFullService } from "../../services/financial-full.service";
import { DocumentFinancialModel } from "../../models/document-financial.model";

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent {

  @Output()
  refreshDocumentList = new EventEmitter();

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

    if (this.uploadFileResult) {
      this.refreshDocumentList.emit();
    }

    if (selectedFile) {
      this.selectedFile = selectedFile;
      this.uploadFileResult = undefined;
    }
  }

  public async startUpload() {
    this.isProcessing = true;
    this.uploadFileResult = await this.parseDocumentService.postDocument(this.selectedFile, this.apiKey);
    this.selectedFile = undefined;
    this.isProcessing = false;
  }

}
