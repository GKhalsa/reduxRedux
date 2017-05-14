import {INCREMENT, DECREMENT, ADD_TODO, REMOVE_TODO} from './actionTypes';

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

export function addTodo(todo){
  return {
    type: ADD_TODO,
    todo
  };
}

export function removeTodo(index){
  return {
    type: REMOVE_TODO,
    index
  };
}
