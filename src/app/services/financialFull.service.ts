import { Injectable } from "@angular/core";
import { BaseService } from "./base/base.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class FinancialFullService extends BaseService {

  protected baseUrl = 'parseDocument/financial_full';
  // protected baseUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(
    protected override http: HttpClient,
  ) {
    super(http);
  }

  public async postDocument(file: File) {
    const formData = new FormData();
    formData.append('document' , file);

    return this.postRequest(this.baseUrl, formData).toPromise();
  }

  public async getReceipts(): Promise<any> {
    // const res = await this.getRequest(this.baseUrl).toPromise();
    // console.log(res);

    return [];
  }

}
