import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

import { ApiRequestOptions, ApiService } from "./base/api.service";
import { LocalStorageKey, LocalStorageService } from "./utility/local-storage.service";
import { DocumentFinancialModel } from "../models/document-financial.model";

@Injectable({
  providedIn: 'root',
})
export class FinancialFullService extends ApiService {

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
    formData.append('document', file);

    const requestOptions: ApiRequestOptions = { apiKey };

    try {
      const postObservable = this.postRequest(this.baseUrl, formData, requestOptions);
      const result = await firstValueFrom(postObservable);
      if (result && result.data) {
        this.saveToHistory(result.data);
        return result.data;
      }
    } catch (err) {
      return null;
    }
  }

  public getHistory(): DocumentFinancialModel[] {
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
