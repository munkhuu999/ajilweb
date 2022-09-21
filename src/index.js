import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
//  import {configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

import spbookReducer from './redux/reducer/spbookReducer';
import mostsellReducer from './redux/reducer/mostsellReducer';
import childrenReducer from './redux/reducer/childrenReducer';
import newbookReducer from './redux/reducer/newbookReducer';
import bestwriterReducer from './redux/reducer/bestwriterReducer';
import partnerReducer from './redux/reducer/partnerReducer';


const loggerMiddleware = store => {
  return next => {
    return action => {
      console.log('action --->', action);
      console.log('before --->', store.getState());
      const result = next(action);
      console.log('result --->', store.getState());
      return result;
    }
  }
};
const reducer = combineReducers({
  spbookReducer,
  mostsellReducer,
  childrenReducer,
  newbookReducer,
  bestwriterReducer,
  partnerReducer,

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [loggerMiddleware, thunk]
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
//  const store = configureStore({
//   reducer:{
//     spbookReducer,
//     applyMiddleware:{
//       thunk
//     }
//   }
//  });



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
