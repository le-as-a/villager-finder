import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const getCatalog = createAsyncThunk(
    'catalog/GET',
    async () => {
        const res = await fetch('https://acnhapi.com/v1/villagers');

        if (res.ok) {
            const data = await res.json();
            let catalog = [];
            for (let v in data) {
                let obj = data[v];
                catalog.push({
                    name: obj.name['name-USen'],
                    fn: v,
                    personality: obj.personality,
                    species: obj.species,
                    gender: obj.gender,
                    icon: obj['icon_uri']
                });
            }
            const byName = catalog.sort(function (a, b) {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            return byName;
        }
    }
)

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCatalog.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        });
    }
})