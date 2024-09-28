import {$api} from "./index";
export const getCharacters = async () => {
    try {
        const { data } = await $api.get('https://rickandmortyapi.com/api/character');
       return data
    } catch (error) {
        console.log(error)
    }
};


