import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constant/constant';

const initialState = {
    filterFrom: 'Все',
    filterTo: 'Все',
    selectFrom: 'BTC',
};

export const appProcess = createSlice({
    name: NameSpace.Process,
    initialState,
    reducers: {
        setFilterFrom: (state, action) => {
            state.filterFrom = action.payload;
            state.filterTo = 'Все';
        },
        setFilterTo: (state, action) => {
            state.filterTo = action.payload;
        },
        setSelectFrom: (state, action) => {
            state.selectFrom = action.payload;
            state.filterTo = 'Все';
        },
    },
});

export const { setFilterFrom, setFilterTo, setSelectFrom } = appProcess.actions;
