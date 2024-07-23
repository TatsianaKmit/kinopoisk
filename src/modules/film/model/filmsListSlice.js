import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFilmList } from '../api/film.api';

const initialState = {
    loading: false,
    films: [],
    error: ''
};

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async (_, thunkAPI) => {
        try {
            const response = await fetchFilmList();
            return response.data.items;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const filmsListSlice = createSlice({
    name: 'filmsList',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.films = action.payload;
                state.error = '';
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.loading = false;
                state.films = [];
                state.error = action.payload;
            });
    },
});

export default filmsListSlice.reducer;