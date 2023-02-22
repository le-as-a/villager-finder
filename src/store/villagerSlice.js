import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {};

export const getVillager = createAsyncThunk(
    'villager/GET',
    async (id) => {
        const res = await fetch(`https://acnhapi.com/v1/villagers/${id}`);

        if (res.ok) {
            const data = await res.json();
            const villager = {
                name: data.name['name-USen'],
                personality: data.personality,
                birthday: data['birthday-string'],
                species: data.species,
                gender: data.gender,
                hobby: data.hobby,
                catchphrase: data['catch-phrase'],
                image: data['image_uri'],
                icon: data['icon_uri'],
                saying: data.saying,
                bubbleColor: data['bubble-color'],
                textColor: data['text-color']
            };
            return villager;
        }
    }
)

export const clearVillager = createAction('villager/CLEAR');

export const villagerSlice = createSlice({
    name: 'villager',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getVillager.fulfilled, (state, action) => {
            state = {...action.payload};
            return state;
        });
        builder.addCase(clearVillager, () => initialState)
    },
    reducers: {}
});