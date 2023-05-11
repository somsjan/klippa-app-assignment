import { Injectable } from "@angular/core";
import { ApiRequestOptions, BaseService } from "./base/base.service";
import { HttpClient } from "@angular/common/http";
import { LocalStorageKey, LocalStorageService } from "./utility/local-storage.service";

@Injectable({
  providedIn: 'root',
})
export class FinancialFullService extends BaseService {

  protected baseUrl = 'parseDocument/financial_full';
  protected localStorageKey = LocalStorageKey.FINANCIAL_DOCUMENT_HISTORY;

  constructor(
    protected override http: HttpClient,
    private localStorageService: LocalStorageService,
  ) {
    super(http);
  }

  public async postDocument(file: File, apiKey: string): Promise<any> {
    const formData = new FormData();
    formData.append('document' , file);

    const requestOptions: ApiRequestOptions = { apiKey };
    const { data } = await this.postRequest(this.baseUrl, formData, requestOptions).toPromise();
    this.saveToHistory(data);
    return data;
  }

  public getHistory() {
    return this.localStorageService.readStorage(this.localStorageKey);
  }

  public saveToHistory(dataObj: any) {
    let newStorageValue: any[] = [dataObj];

    const previousData: any[] = this.localStorageService.readStorage(this.localStorageKey);
    if (previousData && previousData.length) {
      newStorageValue = previousData.concat(newStorageValue);
    }
    return this.localStorageService.saveStorage(this.localStorageKey, newStorageValue);
  }

}
