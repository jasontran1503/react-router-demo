import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import './Authentication.css';
import Login from './Login/Login';
import Register from './Register/Register';

function Authentication() {
  const match = useRouteMatch();

  return (
    <div>
      <div className="auth">
        <Link className="nav-item nav-link" to={`${match.url}/login`}>
          Login
        </Link>
        <Link className="nav-item nav-link" to={`${match.url}/register`}>
          Register
        </Link>
      </div>

      <Switch>
        <Route path={`${match.url}/login`} component={Login}></Route>
        <Route path={`${match.url}/register`} component={Register}></Route>
      </Switch>
    </div>
  );
}

Authentication.propTypes = {};

export default Authentication;
