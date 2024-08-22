import { api } from "./api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateStatus: build.mutation<
      UpdateStatusApiResponse,
      UpdateStatusApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/order/update-status`,
        method: "PUT",
        body: queryArg.orderUpdateRequest,
      }),
    }),
    create: build.mutation<CreateApiResponse, CreateApiRequest>({
      query: (queryArg) => ({
        url: `/api/v1/order/create`,
        method: "POST",
        body: queryArg.orderCreateRequest,
      }),
    }),
    getPizza: build.query<GetPizzaApiResponse, GetPizzaApiRequest>({
      query: () => ({ url: `/api/v1/pizza/getPizza` }),
    }),
    search: build.query<SearchApiResponse, SearchApiRequest>({
      query: () => ({ url: `/api/v1/order/search` }),
    }),
    getApiV1OrderGet: build.query<
      GetApiV1OrderGetApiResponse,
      GetApiV1OrderGetApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/order/get`,
        params: { code: queryArg.code },
      }),
    }),
    getStatus: build.query<GetStatusApiResponse, GetStatusApiRequest>({
      query: () => ({ url: `/api/v1/lookup/getStatus` }),
    }),
    getPizzas: build.query<GetPizzasApiResponse, GetPizzasApiRequest>({
      query: () => ({ url: `/api/v1/lookup/getPizzas` }),
    }),
    get1: build.query<Get1ApiResponse, Get1ApiRequest>({
      query: () => ({ url: `/api/v1/customer/search-customer` }),
    }),
    deleteApiV1OrderDelete: build.mutation<
      DeleteApiV1OrderDeleteApiResponse,
      DeleteApiV1OrderDeleteApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/order/delete`,
        method: "DELETE",
        params: { code: queryArg.code },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as ServiceApiBase };
export type UpdateStatusApiResponse = /** status 200 OK */ ResponseDto;
export type UpdateStatusApiRequest = {
  orderUpdateRequest: OrderUpdateRequest;
};
export type CreateApiResponse = /** status 200 OK */ OrderCreateResponse;
export type CreateApiRequest = {
  orderCreateRequest: OrderCreateRequest;
};
export type GetPizzaApiResponse = /** status 200 OK */ PizzaSearchResponse;
export type GetPizzaApiRequest = void;
export type SearchApiResponse = /** status 200 OK */ OrderSearchResponse;
export type SearchApiRequest = void;
export type GetApiV1OrderGetApiResponse = /** status 200 OK */ OrderDto;
export type GetApiV1OrderGetApiRequest = {
  code: string;
};
export type GetStatusApiResponse = /** status 200 OK */ LookupDto[];
export type GetStatusApiRequest = void;
export type GetPizzasApiResponse = /** status 200 OK */ LookupDto[];
export type GetPizzasApiRequest = void;
export type Get1ApiResponse = /** status 200 OK */ CustomerSearchResponse;
export type Get1ApiRequest = void;
export type DeleteApiV1OrderDeleteApiResponse =
  /** status 200 OK */ ResponseDto;
export type DeleteApiV1OrderDeleteApiRequest = {
  code: string;
};
export type ResponseDto = {
  status?: boolean;
  message?: string;
};
export type OrderUpdateRequest = {
  code?: string;
  status?: string;
};
export type OrderCreateResponse = {
  response?: ResponseDto;
};
export type PizzaDto = {
  code?: string;
  description?: string;
  name?: string;
  price?: number;
};
export type OrderDto = {
  code?: string;
  status?: string;
  price?: number;
  deleted?: boolean;
  deletionDate?: string;
  creationDate?: string;
  creationUser?: string;
  modificationDate?: string;
  pizzas?: PizzaDto[];
};
export type OrderCreateRequest = {
  order?: OrderDto;
};
export type PizzaSearchResponse = {
  response?: PizzaDto[];
};
export type OrderSearchResponse = {
  response?: OrderDto[];
};
export type LookupDto = {
  code?: string;
  description?: string;
};
export type CustomerDto = {
  name?: string;
};
export type CustomerSearchResponse = {
  customers?: CustomerDto[];
};
export const {
  useUpdateStatusMutation,
  useCreateMutation,
  useGetPizzaQuery,
  useLazyGetPizzaQuery,
  useSearchQuery,
  useLazySearchQuery,
  useGetApiV1OrderGetQuery,
  useLazyGetApiV1OrderGetQuery,
  useGetStatusQuery,
  useLazyGetStatusQuery,
  useGetPizzasQuery,
  useLazyGetPizzasQuery,
  useGet1Query,
  useLazyGet1Query,
  useDeleteApiV1OrderDeleteMutation,
} = injectedRtkApi;
