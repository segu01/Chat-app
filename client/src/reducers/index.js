import { combineReducers } from 'redux';
import messagesReducer from './chatReducers';

const rootReducer = combineReducers({
  message: messagesReducer,
  // Add other reducers here if needed
});

export default rootReducer;
