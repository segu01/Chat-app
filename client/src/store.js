import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  // You can add initial state here if needed
);

export default store;
