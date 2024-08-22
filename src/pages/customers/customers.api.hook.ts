import { ServiceApiBase } from "../../api/src/generated";


const useCustomersApiHook = () => {

    const [getSearchCustomer, { data: getSearchCustomerResponse, isLoading: getSearchCustomerLoading }] = ServiceApiBase.useLazyGet1Query();
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
