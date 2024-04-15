export interface IData<T> {
  success: boolean;
  statusCode: number;
  message: string;
  result: T;
}
