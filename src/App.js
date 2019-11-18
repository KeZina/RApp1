import React from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import Layout from './Layout';

const initialState = [
  ...Object.values(localStorage).map(item => JSON.parse(item))
]

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_NOTE":
      return [...state, action.note];
    case "REMOVE_NOTE":
      return [...state.filter(item => item.title !== action.title)];
    case "DATE_SORTING":
      return [...state].sort((a, b) => b.date - a.date);
    case "PRIORITY_SORTING":
      return [...state].sort((a, b) => b.priority - a.priority);
    default:
      return state;
  }
}

const store = createStore(reducer);



const App = () => {
  return (
    <Provider store = {store}>
      <div className="app-container">
        <Layout />
      </div>
    </Provider> 
  )
}

export default App;
