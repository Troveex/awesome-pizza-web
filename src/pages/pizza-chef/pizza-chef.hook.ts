import { useEffect, useMemo } from "react";
import { ServiceApi } from "../../api/src/enhanced";
import StatusOrderEnum from "../../constants/status-order.enum";
import useNavigationHook from "../../hooks/shared/navigation.hook";
import { useAppDispatch } from "../../store/hooks";
import usePizzaChefApiHook from "./pizza-chef.api.hook";


const usePizzaChefHook = () => {

    const dispatch = useAppDispatch();
    const { redirectTo } = useNavigationHook();
    const { getSearchOrder, getSearchOrderResponse, setUpdateStatus, setUpdateStatusResponse, isLoading } = usePizzaChefApiHook();

    useEffect(() => {
        getSearchOrder();
    }, []);

    const startOrder = (code: string) => {
        setUpdateStatus(code, StatusOrderEnum.IN_PROGRESS);
    };

    const endOrder = (code: string) => {
        setUpdateStatus(code, StatusOrderEnum.COMPLETED);
    };

    const deletetOrder = (code: string) => {
        setUpdateStatus(code, StatusOrderEnum.DELETED);
    };

    const orderInProgress = useMemo((): boolean => {
        return getSearchOrderResponse?.response?.some((item) => item.status === StatusOrderEnum.IN_PROGRESS) ?? false;
    }, [getSearchOrderResponse]);

    const orderBooked = useMemo((): boolean => {
        return getSearchOrderResponse?.response?.some((item) => item.status === StatusOrderEnum.BOOKED) ?? false;
    }, [getSearchOrderResponse]);

    const orderCompleted = useMemo((): boolean => {
        return getSearchOrderResponse?.response?.some((item) => item.status === StatusOrderEnum.COMPLETED) ?? false;
    }, [getSearchOrderResponse]);

    const orderDeletd = useMemo((): boolean => {
        return getSearchOrderResponse?.response?.some((item) => item.status === StatusOrderEnum.DELETED) ?? false;
    }, [getSearchOrderResponse]);

    const redirectToHomePage = () => {
        redirectTo("/");
    };

    const invalidatesTags = () => {
        dispatch(ServiceApi.util.invalidateTags(["UpdateStatusOrder"]));
    };

    return {
        getSearchOrderResponse,

        redirectToHomePage,

        startOrder,
        endOrder,
        deletetOrder,

        orderBooked,
        orderCompleted,
        orderDeletd,
        orderInProgress
    };
};
export default usePizzaChefHook;
