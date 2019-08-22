import React from 'react';
import 'normalize.css';
import './style.scss';
import UserManagementPage from './pages/UserManagementPage';

export class Root extends React.Component {
  render() {
    return <UserManagementPage />;
  }
}

export default Root;
