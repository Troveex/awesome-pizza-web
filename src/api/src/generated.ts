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
    getStatus: build.query<GetStatusApiResponse, GetStatusApiRequest>({
      query: () => ({ url: `/api/v1/lookup/getStatus` }),
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
export type GetStatusApiResponse = /** status 200 OK */ LookupDto[];
export type GetStatusApiRequest = void;
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
export const {
  useUpdateStatusMutation,
  useCreateMutation,
  useGetPizzaQuery,
  useLazyGetPizzaQuery,
  useSearchQuery,
  useLazySearchQuery,
  useGetStatusQuery,
  useLazyGetStatusQuery,
} = injectedRtkApi;
