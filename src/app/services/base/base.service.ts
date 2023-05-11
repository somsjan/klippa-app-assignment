import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

export interface ApiRequestOptions {
  apiKey: string;
}

export class BaseService {

  constructor(
    protected http: HttpClient,
  ) {

  }

  public postRequest(url: string, body: any, options: ApiRequestOptions): any {
    try {
      const fullUrl = this.getFullEndpointUrl(url);
      const requestOptions = this.getRequestOptions(options);
      return this.http.post(fullUrl, body, requestOptions);
    } catch (e) {
      this.httpErrorHandler(e);
    }
  }

  private getRequestOptions(options: ApiRequestOptions) {
    return {
      headers: new HttpHeaders({
        'X-Auth-Key': options.apiKey,
      }),
    }
  }

  private getFullEndpointUrl(url: string): string {
    return `${environment.api.baseUrl}/${url}`;
  }

  private httpErrorHandler(error: any) {
    console.error('ErrorHandler', error.toString);
  }

}
