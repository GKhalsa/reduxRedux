import Store from '../src/store';
import combineReducers from '../src/combineReducers';
import {countReducer, toDoReducer} from './helpers/reducers';
import {add, addTodo} from './helpers/actionCreators'
import pry from 'pryjs'


describe('combineReducers', () => {

  it('returns a combined reducer object that maps state keys to reducers', () => {
    const reducer = combineReducers({
      countReducer,
      toDoReducer
    });

    expect(typeof reducer).toEqual("function");
    const state = reducer({}, add(1));
    expect(state).toEqual({countReducer: 1, toDoReducer: []});
    const newState = reducer(state, addTodo({task: "run"}));
    expect(newState).toEqual({countReducer: 1, toDoReducer: [{task: "run"}]});
  });

});
