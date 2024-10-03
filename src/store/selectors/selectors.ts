import {RootState} from "../index";


export const selectFormData = (state: RootState) => state?.form.formData;
export const selectIsModalOpen = (state: RootState) => state?.modal.isModalOpen;
export const selectIsModalOpenCard = (state: RootState) => state?.modal.isModalOpenCard;
export const selectSelectedRow = (state: RootState) => state?.table.selectedRow;

export const selectCharacters = (state: RootState) => state?.characters.allCharacters;
export const selectCharactersLoading = (state: RootState) => state?.characters.loading;
export const selectCharactersError = (state: RootState)  => state?.characters.error;