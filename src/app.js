import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const store = configureStore();

store.dispatch(addExpense({description:'Meme bill', note:'mynote', amount:1020, createdAt:1580500800000}));
store.dispatch(addExpense({description:'Food bill1st', note:'mynote', createdAt:1577908800000}));
store.dispatch(addExpense({description:'olddate', note:'mynote', createdAt:1573675200000}));
store.dispatch(addExpense({description:'completedtest', note:'mynote', createdAt:1573675200000, completed:true}));
// setTimeout(() => {
//   //store.dispatch(setTextFilter('Memes'));
//   console.log(store.getState())
// },3000)

const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);

  const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
    );




  ReactDOM.render(jsx, document.getElementById('app'));
