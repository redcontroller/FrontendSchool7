import {configureStore} from '@reduxjs/toolkit';
import expenseSlice from './expense/expense-slice';


// reducer 를 하나로 통합한다.
// (redux 에서는 rootReducer)
const store = configureStore({
    reducer: {
        expense: expenseSlice
    }
});

export default store;