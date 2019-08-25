import { combineReducers } from 'redux';
import userManagementPageReducer from '../../app/pages/UserManagementPage/redux-tools/reducer';

export default () =>
  combineReducers({
    userManagement: userManagementPageReducer,
  });
