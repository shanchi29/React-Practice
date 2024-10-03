import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../../api/index";

export const getCharacters = createAsyncThunk(
    'characters/getCharacters',
    async () => {
        try {
            const { data } = await $api.get('https://rickandmortyapi.com/api/character');
            return data.results;
        } catch (error) {
            console.log(error)
        }
    }

);