import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


const addExpense = (
    {
        description = '', 
        note = '', 
        amount=0, 
        createdAt=0
    }        = {}   
    ) => ({
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id}={}) => (
    {
        type:'REMOVE_EXPENSE',
        id
    }
)

const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
})

//store.dispatch(setTextFilter('rent'));

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    filter: 'amount'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    filter: 'date'
})

const setStartDate = (date = undefined) => ({ // setting date to undefined by default is redundant 
    type:'SET_START_DATE',
    date
})
const setEndDate = (date = undefined) => ({
    type:'SET_END_DATE',
    date
})


const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE' :
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
             return state.filter(({id}) => id !== action.id); // this is synonymous with return state.filter((expenses) => expenses.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

//prevState.options.filter((option) => optionToRemove !== option)

const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER' :        
        return {...state,
            text: action.text
        }
        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy: action.filter
            }
        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy: action.filter
            }
        case 'SET_START_DATE':    
        return {
                
                ...state,
                startDate: action.date
            }
            case 'SET_END_DATE':   
            return {
                    
                    ...state,
                    endDate: action.date
                }
        default:
            return state;
    }
};


const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        console.log("this is the " + text)
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1: -1;
        }else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1: -1;
        }
    })
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description:'Meme machiene', note:'mynote', amount:1020, createdAt:-1000}));
const expenseTwo = store.dispatch(addExpense({description:'expense two', note:'mynote', amount:300, createdAt:1000}));

//store.dispatch(removeExpense({id: expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));
//store.dispatch(setTextFilter('easdfa'));
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());


//store.dispatch(setStartDate(1000));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

const demoState = {
expenses: [{
    id:'posdfasdf',
    description: 'rent',
    note:'this is the note I set',
    amount: 50000,
    createdAt: 2
}],
filters: {
    text:'rent',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
}
};

const user = {
    name: 'Matt',
    age: 21
};

// console.log({
//     ...user,
//     location:'SD',
//     age: 22
// })