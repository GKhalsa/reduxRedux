import {INCREMENT, DECREMENT} from './actionTypes';

export function countReducer(state = 0, action){
  switch(action.type){
    case INCREMENT:
      return state + action.amount;
    case DECREMENT:
      return state - action.amount;
    default:
      return state;
  }
}
