import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {};

export const getNames = createAsyncThunk(
    'villagers/NAMES',
    async () => {
        const res = await fetch('https://acnhapi.com/v1/villagers');

        if (res.ok) {
            const data = await res.json();
            const villagerNames = {};
            for (let item in data) {
                let obj = data[item];
                villagerNames[item] = obj.name['name-USen'];
            }
            return villagerNames;
        }
    }
)

export const namesSlice = createSlice({
    name: 'names',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getNames.fulfilled, (state, action) => {
            state = {...action.payload};
            return state;
        });
    }
});