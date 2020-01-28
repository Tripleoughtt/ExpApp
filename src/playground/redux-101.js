import { createStore } from 'redux';


const incrementCount = ({incrementBy = 1} = {})  => (
{
    type:'INCREMENT',
    incrementBy
}
);

const decrementCount = ({decrementBy = 1} = {}) =>(
{
    type:'DECREMENT',
    decrementBy
}
);

const resetCount = () => ({
    type:'RESET'
})

const setCount = ({set = 87} = {}) => (
    {
        type:'SET',
        set
    }
)

//REDUCERS
const countReducer = (state = {count:0}, action) => {
    switch(action.type) {
        case 'INCREMENT' :
        return({count:state.count + action.incrementBy});
        case 'DECREMENT' : 
        return({count:state.count - action.decrementBy});
        case 'RESET' : return({count:0});
        case 'SET' : return({count:action.set})
        default: return state;
    }
};



const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//unsubscribe();
store.dispatch(incrementCount({incrementBy: 123412345}))
// store.dispatch(
// {
//     type: 'INCREMENT',
//     incrementBy: 33
// }); 

// store.dispatch(
//     {
//         type: 'DECREMENT'
//     });
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:1231231231321}))
store.dispatch(resetCount());

    // store.dispatch(
    //     {
    //         type: 'DECREMENT',
    //         decrementBy: 17
    //     });

  store.dispatch(setCount());
store.dispatch(setCount({set:123123}));