// redux/store.ts
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import redux-thunk middleware if you are using it
import rootReducer from './reducers'; // Import your root reducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
