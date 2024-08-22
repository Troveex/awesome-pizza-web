import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { ServiceApiBase } from "../api/src/generated";


export const store = configureStore({
    reducer: {
        [ServiceApiBase.reducerPath]: ServiceApiBase.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: true,
        serializableCheck: false,
        thunk: {
            extraArgument: {

            }
        }
    })
        .concat(ServiceApiBase.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
