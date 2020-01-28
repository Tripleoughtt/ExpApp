import React from 'react';
import ExpenseList from './ExpenseList';
import CompletedExpenseList from './CompletedExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const CompletedPage = () => (
    <div>
    <ExpenseListFilters />
    <CompletedExpenseList />
    <p>This is from CompletedPage page</p>
    </div>
  )

export default CompletedPage;