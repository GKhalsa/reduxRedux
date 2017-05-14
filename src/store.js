import isPlainObject from 'lodash/isPlainObject';

export default class Store {

  constructor(reducer, preloadedState){
    this.currentReducer = reducer;
    this.currentState = preloadedState;
    this.listeners = [];
  }

  getState(){
    return this.currentState;
  }

  dispatch(action){
    if(!isPlainObject(action) || typeof action.type === 'undefined'){
      throw new Error('Actions must be plain objects with a defined type property');
    }

    for(let i = 0; i < this.listeners.length; i ++){
      const listener = this.listeners[i]
      listener();
    }

    this.currentState = this.currentReducer(this.currentState, action);
  }

  subscribe(listener){
    this.listeners.push(listener);
  }

}
