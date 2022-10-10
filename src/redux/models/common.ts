export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

export interface ListReponse<T> {
  data: T[];
  paginations: PaginationParams;
}
