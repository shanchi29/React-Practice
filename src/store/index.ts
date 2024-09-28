import { configureStore } from '@reduxjs/toolkit';
import {formReducer, FormState} from "./slices/forms/formSlice";

export interface RootStateSchema {
    form: FormState
    }

export function createReduxStore() {
    return configureStore<RootStateSchema | undefined>({
        reducer: {
            form: formReducer,
        },
    });
}



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export const store = createReduxStore();