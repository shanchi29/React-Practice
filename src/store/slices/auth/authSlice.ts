import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    isAuth : boolean;
}

const initialState: AuthState = {
    isAuth : false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuth: (state: AuthState, action) => {
            state.isAuth = action.payload;
        },
    }
})

export const {setIsAuth} = authSlice.actions;
export const authReducer: any = authSlice.reducer;