import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import { addExpense } from '../actions/expenses';
import { DateRangePicker } from 'react-dates';


class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused:null
    }
    onDatesChange = ({startDate, endDate}) => {
        console.log("in dates change")
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = ((calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    })
render(){
    return (<div>
        <input type="text" 
        value={this.props.filter.text} 
        onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select value={this.props.filter.sortBy} onChange = {(e) => {
            switch(e.target.value) {
                case 'date': 
                return this.props.dispatch(sortByDate());
                case 'amount' : 
                return this.props.dispatch(sortByAmount());
                case 'alphabetically': 
                return this.props.dispatch(addExpense({description:'Alpha', note:'mynote', createdAt:2}));
            }
            
        }}>
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
        </select>
        {console.log(this.props)}
        <DateRangePicker 
        startDate={this.props.filter.startDate}
        startDateId="startDateId"
        endDate={this.props.filter.endDate}
        endDateId="endDateId"
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
        />
    </div>)
}
}


const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);