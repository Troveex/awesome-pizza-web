import { ServiceApiBase } from "./generated";

export const ServiceApi = ServiceApiBase.enhanceEndpoints({
    addTagTypes: [
        "UpdateStatusOrder",
    ],
    endpoints: {

        updateStatus: {
            invalidatesTags: ["UpdateStatusOrder"]
        },

        search: {
            providesTags: ["UpdateStatusOrder"]
        }
    },
});
