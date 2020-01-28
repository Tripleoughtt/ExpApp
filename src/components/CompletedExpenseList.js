import React from 'react'
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
    <h1>Resolved Expenses</h1>
    { 
    props.expenses.map((expense) => {
        console.log(expense)
        let completed = false;
        if(expense.completed === true){
        return(
        <ExpenseListItem key={expense.id} {...expense}/>
        )}
    })
    }
    {  console.log(props.expenses)}
   
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filter)
    };
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;