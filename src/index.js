import testFunc from './another';
import { createStore } from 'redux';

console.log('Kerri loves to bike outside. Everyday!');

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('demo').innerHTML = Date();
  });
});

const reducer = function (state = {}, action) {
  if ('USER_NAME' === action.type) {
    return action.payload;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.warn('My store has changed', store.getState());
});

store.dispatch({
  type: 'TEAM_MEMBER',
  payload: 'Kerri Walker'
});
