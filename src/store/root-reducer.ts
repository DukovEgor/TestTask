import { combineReducers } from '@reduxjs/toolkit';
import { appProcess } from './app-process/app-process';
import { NameSpace } from '../constant/constant';

export const rootReducer = combineReducers({
    [NameSpace.Process]: appProcess.reducer,
});
