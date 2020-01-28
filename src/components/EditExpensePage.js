import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, addExpense, removeExpense} from '../actions/expenses'



const EditExpensePage = (props) => {
  return(
    <div>
    <ExpenseForm 
    expense={props.expense}
    onSubmit={(expense) => {
      // console.log(props)
      // console.log(expense)
      // console.log(props.expense.id)
//      props.dispatch(addExpense(expense));
      props.dispatch(editExpense(props.expense.id, expense)); ///QUESTION HERE
      props.history.push('/');
    }}
    />

    <button 
      onClick={() => {
        props.dispatch(removeExpense(props.expense));
        props.history.push('/');
      }}
    >Remove Item
    </button>
    </div>
  )}

const mapStateToProps = (state, props) => {
  return { 
    expense : state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage);