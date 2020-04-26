import testFunc from './another';
import { createStore, combineReducers } from 'redux';

console.log('Kerri loves to bike outside. Everyday!');

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('demo').innerHTML = Date();
  });
});

const reducerEmployee = (state = {}, action) => {
  switch (action.type) {
    case 'TEAM_MEMBER': {
      state = { ...state, employee: action.payload };
      break;
    }
    case 'POSITION': {
      state = { ...state, position: action.payload };
      break;
    }
  }
  return state;
};

const reducerEmployeeInterests = (state = {}, action) => {
  switch (action.type) {
    case 'HOBBIES': {
      state = { ...state, hobbies: action.payload };
      break;
    }
  }
  return state;
};

//here we combine reducers before passing them to the store
const reducers = combineReducers({
  employee: reducerEmployee,
  interests: reducerEmployeeInterests
});

const store = createStore(reducers);

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

function getInterests() {
  return {
    type: 'HOBBIES',
    payload: 'Running, Hiking, Biking, Lifting, Learning, Reading, Writing'
  };
}

store.dispatch(getTeamMember());

//dispatch action to reducer function

store.dispatch(getPosition());

store.dispatch(getInterests());
