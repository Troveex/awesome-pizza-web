import { useEffect } from "react";
import useNavigationHook from "../../hooks/shared/navigation.hook";
import useCustomersApiHook from "./customers.api.hook";


const useCustomersHook = () => {

    const { redirectTo } = useNavigationHook();
    const { getSearchCustomer, getSearchCustomerResponse } = useCustomersApiHook();

    const redirectToHomePage = () => {
        redirectTo("/");
    };

    const redirectToCustomerOrder = (id: string) => {
        redirectTo(`/customers/${id.replace(":name", id)}`);
    };

    const redirectToCustomer = () => {
        redirectTo(`/customers`);
    };

    useEffect(() => {
        getSearchCustomer();
    }, []);

    return {
        redirectToHomePage,
        redirectToCustomerOrder,
        redirectToCustomer,

        getSearchCustomerResponse
    };
};
export default useCustomersHook;
