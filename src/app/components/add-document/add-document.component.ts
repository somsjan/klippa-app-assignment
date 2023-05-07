import { Component, EventEmitter, Output } from '@angular/core';
import { FinancialFullService } from "../../services/financialFull.service";

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent {

  @Output()
  readonly afterUpload = new EventEmitter();

  public fileName = '';
  public selectedFile: File;

  constructor(
    private parseDocumentService: FinancialFullService,
  ) {
  }

  public onFileSelected(event) {
    const file:File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.selectedFile = file;
    }
  }

  public async startUpload() {
    await this.parseDocumentService.postDocument(this.selectedFile);
    this.afterUpload.emit();
  }

}
