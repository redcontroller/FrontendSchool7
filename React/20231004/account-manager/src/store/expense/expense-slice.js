import { createSlice } from "@reduxjs/toolkit";

const expenseList = localStorage.length > 0 ? itemList(localStorage) : [{name: 'coffee', price: 5000}, {name: 'icecream', price: 1500}];
const income = localStorage.getItem('income') ? localStorage.getItem('income') : 1000000;

function itemList (items) {
    const result = [];
    for (let i; i<items.length-1; i++) {
        result.push(JSON.parse(items.getItem(i)));
    }

    return result;
}

// store 생성
const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        // 사용자의 지출 목록을 관리합니다.
        expenseList: expenseList, 
        income: income
    },
    // reducer 의 action 을 정의한다.
    reducers: {
        // 액션의 type의 이름입니다.
        // 사용자의 지출 내역을 store에 반영합니다.
        addExpenseAction: (currentSlice, action) => {
            // slice의 expenseList 에 접근하여 데이터를 수정합니다.
            currentSlice.expenseList.push(action.payload);
        },
        // 사용자의 수입을 store에 반영합니다.
        setIncomeAction: (currentSlice, action)=> {
            console.log('setIncomeAction');
            currentSlice.income = action.payload;
        }
    }
});


// action 을 디스패치에서 사용할 수 있또록 밖으로 내보냅니다.
export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

// slice 에서 생성한 reducer 들을 외부로 내보냅니다.
export default expenseSlice.reducer;