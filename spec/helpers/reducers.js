import {INCREMENT, DECREMENT} from './actionTypes';

export function countReducer(state = 0, action){
  switch(action.type){
    case INCREMENT:
      return state + action.num;
    case DECREMENT:
      return state - action.num;
    default:
      return state;
  }
}

export function toDoReducer(state = [], action){
  switch(action.type){
    case ADD_TODO:
      return state.concat(action.todo);
    case REMOVE_TODO:
      return state.filter((todo, index) => index !== action.index);
    default:
      return state;
  }
}
