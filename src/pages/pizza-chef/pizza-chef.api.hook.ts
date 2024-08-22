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

    const { data: lookupStatusResponse, isLoading: lookupGetProdottoPfLoading } = ServiceApiBase.useGetStatusQuery();

    return {
        getSearchOrder: getSearchOrderPrivate,
        getSearchOrderResponse,

        setUpdateStatus: updateStatusPrivate,
        setUpdateStatusResponse,

        lookupStatusResponse,

        isLoading: getSearchOrderLoading || setUpdateStatusLoading || lookupGetProdottoPfLoading

    };
};
export default usePizzaChefApiHook;
