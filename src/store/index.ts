import { configureStore } from '@reduxjs/toolkit';
import {formReducer, FormState} from "./slices/forms/formSlice";
import {modalReducer, ModalState} from "./slices/modals/modalSlice"
import {
    tableReducer, TableState
} from "./slices/table/tableSlice";
import {
    charactersReducer,
    CharactersState
} from "./slices/charactersSlice/charactersSlice";

export interface RootStateSchema {
    form: FormState
    modal: ModalState;
    table: TableState;
    characters: CharactersState;
}

export function createReduxStore() {
    return configureStore<RootStateSchema | undefined>({
        reducer: {
            form: formReducer,
            modal: modalReducer,
            table: tableReducer,
            characters: charactersReducer,
        },
    });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const store = createReduxStore();