import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info.</p>}
        <p>Admin Warning</p>
        <WrappedComponent {...props}/>
        </div>
    );
};

//requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    console.log('inhere');
    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props}/> : <div><p>You need to log in</p></div>}        
        </div>
    );
    };




const AdminInfo = withAdminWarning(Info);
const RequireAuthInfo = requireAuthentication(Info);


ReactDOM.render(<RequireAuthInfo isAuthenticated={false} isAdmin={true} info="secret memes"/>, document.getElementById('app'));