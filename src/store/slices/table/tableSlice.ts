import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TableState {
    selectedRow: any | null;
}

const initialState: TableState = {
    selectedRow: null,
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setSelectedRow(state:TableState, action: PayloadAction<any>) {
            state.selectedRow = action.payload;
        },
    },
});

export const { setSelectedRow } = tableSlice.actions;
export const tableReducer: any = tableSlice.reducer;