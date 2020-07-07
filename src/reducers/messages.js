import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let default_data = {}

// example of a reducer to mutate the count variable/state
const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return count + action.payload;
    }
    return count;
}

const messageReducer = (messageList = default_data, action) => {

    if (action.type === 'FETCHED_COURSES') {
      return Object.assign({}, messageList,
        action.data
      );
    }
    if (action.type === 'ADDED_COURSE') {
      return Object.assign({}, messageList,
        action.data
      );
    }
  return messageList;
};

const allReducers =  combineReducers({
    count: counterReducer,
    messageList: messageReducer
});

const store = createStore(allReducers, applyMiddleware(thunk))

export default store;
