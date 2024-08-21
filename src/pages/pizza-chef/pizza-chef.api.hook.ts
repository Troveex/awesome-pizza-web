import { ServiceApiBase } from "../../api/src/generated";


const usePizzaChefApiHook = () => {

    const [getSearchOrder, { data: getSearchOrderResponse, isLoading: getSearchOrderLoading }] = ServiceApiBase.useLazySearchQuery();
    const getSearchOrderPrivate = () => {
        getSearchOrder();
    };

    const [setUpdateStatus, { data: setUpdateStatusResponse, isLoading: setUpdateStatusLoading }] = ServiceApiBase.useUpdateStatusMutation();
    const updateStatusPrivate = (code: string, status: string) => {
        setUpdateStatus({
            orderUpdateRequest: {
                code,
                status
            }
        });
    };

    return {
        getSearchOrder: getSearchOrderPrivate,
        getSearchOrderResponse,

        setUpdateStatus: updateStatusPrivate,
        setUpdateStatusResponse,

        isLoading: getSearchOrderLoading || setUpdateStatusLoading

    };
};
export default usePizzaChefApiHook;
