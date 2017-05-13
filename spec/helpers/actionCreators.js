import {INCREMENT, DECREMENT} from './actionTypes';

export function add(num){
  return {
    type: INCREMENT,
    num
  };

}

export function subtract(num){
  return {
    type: DECREMENT,
    num
  };
}
