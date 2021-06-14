import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        isFetching: false,
        data: {},
        error: null,
    },
    reducers: {
        fetchStarted(state) {
            state.isFetching = true;
        },
        setData(state, action) {
            state.data = action.payload;
            state.isFetching = false;
            state.error = null;
        },
        setError(state, action) {
            state.error = action.payload;
            state.isFetching = false;
            state.data = {};
        }
    }
});

export const { fetchStarted, setData, setError } = dataSlice.actions;
export const dataSelector = state => state.data;
export default dataSlice.reducer;
export const initialState = dataSlice.initialState;

export const fetchData = () => async dispatch => {
    try {
        dispatch(fetchStarted());
        const resp = await fetch("https://api.bluecitytechnology.com/s/smp/");
        const value = await resp.json();
        dispatch(setData(value));
    } catch (e) {
        dispatch(setError(e.toString()));
    };
};
