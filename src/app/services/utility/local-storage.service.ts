import { Injectable } from "@angular/core";

export enum LocalStorageKey {
  FINANCIAL_DOCUMENT_HISTORY = 'financial-document-history',
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  constructor(
  ) {
  }

  public saveStorage(key: LocalStorageKey, value: any): any {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  public readStorage(key: LocalStorageKey): any {
    const storedData: string = localStorage.getItem(key)
    return JSON.parse(storedData);
  }

}
