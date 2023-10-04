import React from 'react';
import { useSelector } from 'react-redux';
import List from '../../components/List/List';

export default function ExpenseList() {

    const expenseList = useSelector((store)=> store.expense.expenseList);
    const income = useSelector((store)=> store.expense.income);
    localStorage.setItem('income', income);

    expenseList.map((item, index) => {
        return localStorage.setItem(index, JSON.stringify(item))
    });

    const items = localStorage;
    console.log(localStorage);

    return (
        // <List items={expenseList} />
        <List items={items} />
    )
}
