import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
    formData: FormData[];
}

const initialState: FormState = {
    formData: [],
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addFormData: (state, action: PayloadAction<FormData>) => {
            state.formData.push(action.payload);
        },
    },
});

export const { addFormData } = formSlice.actions;
export default formSlice.reducer;