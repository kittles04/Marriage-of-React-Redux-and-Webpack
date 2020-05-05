import { createStore } from 'redux';
import todoApp from './components/reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './components/actions';

const store = createStore(todoApp);

console.log('Kerri loves to bike outside. Everyday!');

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('demo').innerHTML = Date();
  });
});

//Log the initial state
console.log(store.getState());

//Every time the state changes, log it
const unsubscribe = store.subscribe(() => console.log(store.getState()));

//Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

//stop listening to updates
unsubscribe();
