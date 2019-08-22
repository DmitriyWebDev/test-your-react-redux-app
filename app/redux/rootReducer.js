import { combineReducers } from 'redux';
import globalReducer from '../common/redux-tools/globalReducer';

export default () =>
  combineReducers({
    global: globalReducer,
  });
