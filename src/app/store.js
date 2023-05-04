import {configureStore} from '@reduxjs/toolkit';
import taskSlice from '../modules/redux/task-slice';
// App State Store here
export const store = configureStore({
    reducer:{taskSlice: taskSlice}
})