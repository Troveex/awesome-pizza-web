import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { OrderDto } from "../../../api/src/generated";
import usePizzaChefApiHook from "../../pizza-chef/pizza-chef.api.hook";
import useCustomersHook from "../customers.hook";


const useCustomerOrderHook = () => {

    const { name } = useParams();
    const { redirectToCustomer } = useCustomersHook();
    const { getSearchOrder, getSearchOrderResponse } = usePizzaChefApiHook();

    useEffect(() => {
        getSearchOrder();
    }, []);

    const order = useMemo(() => {
        return getSearchOrderResponse?.response?.filter((item: OrderDto) => item.creationUser === name?.replace("&20", " "));
    }, [getSearchOrderResponse]);

    return {
        redirectToCustomer,

        order,
        name
    };
};

export default useCustomerOrderHook;
