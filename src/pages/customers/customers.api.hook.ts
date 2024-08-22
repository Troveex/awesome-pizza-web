import { ServiceApi } from "../../api/src/enhanced";


const useCustomersApiHook = () => {

    const [getSearchCustomer, { data: getSearchCustomerResponse, isLoading: getSearchCustomerLoading }] = ServiceApi.useLazyGet1Query();
    const getSearchCustomerPrivate = () => {
        getSearchCustomer();
    };
    return {
        getSearchCustomer: getSearchCustomerPrivate,
        getSearchCustomerResponse,

        getSearchCustomerLoading

    };
};
export default useCustomersApiHook;
