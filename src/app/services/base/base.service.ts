import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

export class BaseService {

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Key': environment.api.apiKey,
    })
  };

  constructor(
    protected http: HttpClient,
  ) {

  }

  public postRequest(url: string, body: any): any {
    try {
      const fullUrl = this.getFullEndpointUrl(url);
      return this.http.post(fullUrl, body, this.httpOptions);
    } catch (e) {
      this.httpErrorHandler(e);
    }
  }

  public getRequest(url: string): any {
    try {
      const fullUrl = this.getFullEndpointUrl(url);
      return this.http.get(fullUrl, this.httpOptions);
    } catch (e) {
      this.httpErrorHandler(e);
    }
  }

  private getFullEndpointUrl(url: string): string {
    return `${environment.api.baseUrl}/${url}`;
  }

  private httpErrorHandler(error: any) {
    console.error('ErrorHandler', error.toString);
  }

}
