import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null,
};
export const fetchApiData = createAsyncThunk('user', async () => {
    const response = await fetch('https://reqres.in/api/users?page=2', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    // console.log('json====', JSON.stringify(json.data));
    return json.data;
}
);

const apiSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchApiData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchApiData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },

});

export default apiSlice.reducer;
