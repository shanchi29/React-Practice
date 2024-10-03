import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getCharacters} from "../../../store/slices/charactersSlice/actions";

interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
}

export interface CharactersState {
    allCharacters: Character[];
    loading: boolean;
    error: string | null;
}

const initialState: CharactersState = {
    allCharacters: [],
    loading: false,
    error: null,
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCharacters.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getCharacters.fulfilled, (state, action: PayloadAction<Character[]>) => {
            state.loading = false;
            state.allCharacters = action.payload;
        })
        builder.addCase(getCharacters.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Unknown error';
        });
    },
});

export const charactersReducer = charactersSlice.reducer;