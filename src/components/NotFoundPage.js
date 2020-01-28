import React from 'react';
import {Link} from 'react-router-dom';

  
const NotFoundPage = () => (
    <div>
    <p>404! :( <Link to="/">Go Home plz</Link></p>
    <p>404! :( <Link to="/create">Go create plz</Link></p>
    <p>404! :( <Link to="/EditExpensePage">Go Expense plz</Link></p>
    <p>404! :( <Link to="/HelpPage">Go Help plz</Link></p>
    </div>
  )

export default NotFoundPage;