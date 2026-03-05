import { createSlice } from "@reduxjs/toolkit";

export const MenuSlice = createSlice({
    name:'filter',
    initialState:{
        category:'All',  
    },
    reducers:{
        setCategory:(state,action) => {
            state.category = action.payload;
        },
    }
});

export const { setCategory } = MenuSlice.actions;

export default MenuSlice.reducer;