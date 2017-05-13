import isPlainObject from 'lodash/isPlainObject';

export default class Store {

  constructor(reducer, preloadedState){
    this.currentReducer = reducer;
    this.currentState = preloadedState;
  }

  getState(){
    return this.currentState;
  }

  dispatch(action){
    if(!isPlainObject(action) || typeof action.type === 'undefined'){
      throw new Error('Actions must be plain objects with a defined type property');
    }

    this.currentState = this.currentReducer(this.currentState, action);
  }

}
