import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authenticate = createAsyncThunk(
    'user/AUTH',
    async () => {
        const res = await fetch('/api/auth');

        if (res.ok) {
            const data = res.json();
            if (data.errors) return;
            return data;
        }
    }
)

export const login = createAsyncThunk(
    'user/LOGIN',
    async (email, pw) => {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        } else if (res.status < 500) {
            const data = await res.json();
            if (data.errors) {
                return data.errors;
            }
            return data;
        } else {
            return ['An error occurred. Please try again.'];
        }
    }
)

export const logout = createAsyncThunk(
    'user/LOGOUT',
    async () => {
        const res = await fetch('/api/auth/logout');

        if (res.ok) {
            return;
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(authenticate.fulfilled, (state, action) => {
            state = {...action.payload};
            return state;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state = {...action.payload};
            return state;
        });
        builder.addCase(logout.fulfilled, () => initialState);
    },
    reducers: {}
});