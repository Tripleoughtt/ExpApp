
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    filter: 'amount'
})

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    filter: 'date'
})

export const setStartDate = (date = undefined) => ({ // setting date to undefined by default is redundant 
    type:'SET_START_DATE',
    date
})
export const setEndDate = (date = undefined) => ({
    type:'SET_END_DATE',
    date
})