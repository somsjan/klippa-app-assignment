export class ApiResponseModel {
  code?: number;
  request_id: string;
  result: string;
  message?: string;
  data?: any;
  errors?: any[];
}
