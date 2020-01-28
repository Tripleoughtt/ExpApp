import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({ id, description, note, amount, createdAt}) => ( // can call props or destructure .dispatch from props along with descrip, amount,etc
 <div>
 <h1><Link to={`/EditExpensePage/${id}`}>{description}</Link></h1>
 <p>Amount: {amount}</p>
 <p>Created at: {createdAt}</p>
 <p>{note}</p>
 </div>
)

export default ExpenseListItem;

