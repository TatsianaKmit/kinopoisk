import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDetails } from '../api/film.api';

export const fetchFilmDetails = createAsyncThunk(
    'film/fetchFilmDetails',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetchDetails(id);
            if (response.data) {
                return response.data;
            }
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.message);
        }
    }
);

const selectedFilmSlice = createSlice({
    name: 'selectedFilm',
    initialState: {
        loading: false,
        film: [],
        error: ''
    },
    reducers: {
        removeSelectedFilm() {
            return {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilmDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFilmDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.film = action.payload;
                state.error = '';
            })
            .addCase(fetchFilmDetails.rejected, (state, action) => {
                state.loading = false;
                state.film = [];
                state.error = action.payload;
            });
    }
});

export const { removeSelectedFilm } = selectedFilmSlice.actions;
export default selectedFilmSlice.reducer; 