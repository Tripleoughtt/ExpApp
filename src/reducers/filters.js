import moment, { months } from 'moment';

const filtersReducerDefaultState = {
    text:'',
    sortBy:'amount',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
};
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER' :        
        return {...state,
            text: action.text
        }
        case 'SORT_BY_ALPHABETICALLY':
            return {
                ...state,
                sortBy: action.filter
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

