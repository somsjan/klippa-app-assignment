import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError, map, Observable } from "rxjs";

export interface ApiRequestOptions {
  apiKey: string;
}

export class ApiService {

  constructor(
    protected http: HttpClient,
  ) {

  }

  public postRequest(url: string, body: any, options: ApiRequestOptions): Observable<any> {
    try {
      const fullUrl = this.getFullEndpointUrl(url);
      const requestOptions = this.generateRequestOptions(options);
      return this.http.post(fullUrl, body, requestOptions).pipe(
        map((response: any) => response),
        catchError((error) => {
          this.httpErrorHandler(error);
          throw error;
        })
      );
    } catch (e) {
      this.httpErrorHandler(e);
      return undefined;
    }
  }

  private generateRequestOptions(options: ApiRequestOptions) {
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
    console.error('ErrorHandler: ', JSON.stringify(error));
  }

}
