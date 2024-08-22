import { ServiceApi } from "../../api/src/enhanced";


const usePizzaChefApiHook = () => {

    const [getSearchOrder, { data: getSearchOrderResponse, isLoading: getSearchOrderLoading }] = ServiceApi.useLazySearchQuery();
    const getSearchOrderPrivate = () => {
        getSearchOrder();
    };

    const [setUpdateStatus, { data: setUpdateStatusResponse, isLoading: setUpdateStatusLoading }] = ServiceApi.useUpdateStatusMutation();
    const updateStatusPrivate = (code: string, status: string) => {
        setUpdateStatus({
            orderUpdateRequest: {
                code,
                status
            }
        });
    };

    const { data: lookupStatusResponse, isLoading: lookupGetProdottoPfLoading } = ServiceApi.useGetStatusQuery();

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
