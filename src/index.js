import testFunc from './another';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  loading: false,
  loaded: false,
  posts: [],
  error: null
};
const middleware = applyMiddleware(thunk);

console.log('Kerri loves to bike outside. Everyday!');

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('demo').innerHTML = Date();
  });
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOADING': {
      state = { ...state, loading: true };
      break;
    }
    case 'LOADED': {
      state = {
        ...state,
        loaded: true,
        loading: false,
        posts: action.payload
      };
      break;
    }
    case 'ERROR': {
      state = { ...state, loading: false, error: action.payload };
      break;
    }
  }
  return state;
};

const store = createStore(reducer, initialState, middleware);

//subscribe to store
store.subscribe(() => {
  console.warn('My store has changed', store.getState());
});

//action creator function

function getTeamMember() {
  return {
    type: 'TEAM_MEMBER',
    payload: 'Kerri Walker'
  };
}

function getPosition() {
  return {
    type: 'POSITION',
    payload: 'Software Developer'
  };
}

store.dispatch((dispatch) => {
  dispatch({ type: 'LOADING' });

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((jsonData) => {
      dispatch({ type: 'LOADED', payload: jsonData });
    })
    .catch((err) => {
      dispatch({ type: 'ERROR', payload: error });
    });
});

//dispatch action to reducer function
