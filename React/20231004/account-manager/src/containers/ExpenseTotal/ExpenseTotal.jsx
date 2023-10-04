import React from 'react';
// import { useSelector } from 'react-redux';

export default function ExpenseTotal() {

    // 모든 지출 내역 불러오기
    // const expenseList = useSelector((store) => store.expense.expenseList);

    // reduce 를 이용해 모든 prise를 더합니다.
    // const totalExpense = expenseList.reduce((acc, item) => {
    //     return acc + item.price
    // }, 0);

    function totalExpense(items) {
        let sum=0;
        for(let i=0; i<items.length-1; i++){
            const item = JSON.parse(items[i]);
            sum += item.price;
        }

        return sum;
    }

    // const income = useSelector((store) => store.expense.income);
    const income = localStorage.getItem('income');

    // 잔액을 계산합니다.
    const balance = income - totalExpense(localStorage);

    return (
        <>
            <div>
                <span>총 지출 : </span>
                <span>₩ {totalExpense(localStorage)}</span>
            </div>
            <div>
                <span>잔액 : </span>
                <span>₩ {balance}</span>
            </div>
        </>
    )
}
