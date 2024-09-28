import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
    formData: FormData[];
}

const initialState: FormState = {
    formData: [],
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addFormData: (state: FormState, action: PayloadAction<any>) => {
            state.formData = [...state.formData, action.payload];
        },
    },
});

export const { addFormData } = formSlice.actions;
export const formReducer: any = formSlice.reducer;