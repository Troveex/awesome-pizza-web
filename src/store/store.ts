import { configureStore } from "@reduxjs/toolkit";
import { ServiceApi } from "../api/src/enhanced";


export const store = configureStore({
    reducer: {
        [ServiceApi.reducerPath]: ServiceApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: true,
        serializableCheck: false,
        thunk: {
            extraArgument: {

            }
        }
    })
        .concat(ServiceApi.middleware)
});
