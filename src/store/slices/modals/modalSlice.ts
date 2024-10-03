import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
    isModalOpen: boolean;
    isModalOpenCard: boolean;
}

const initialState: ModalState = {
        isModalOpen: false,
        isModalOpenCard: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsModalOpenForm: (state: ModalState, action) => {
            state.isModalOpen = action.payload;
        },
        setIsModalOpenCardForm: (state: ModalState, action) => {
            state.isModalOpenCard = action.payload;
        },
    },
});

export const { setIsModalOpenForm, setIsModalOpenCardForm } = modalSlice.actions;
export const modalReducer: any = modalSlice.reducer;