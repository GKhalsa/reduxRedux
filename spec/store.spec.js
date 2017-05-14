import {countReducer, toDoReducer} from './helpers/reducers';
import {add, subtract, addTodo} from './helpers/actionCreators';
import combineReducers from '../src/combineReducers';
import Store from '../src/store';
import sinon from 'sinon';

describe('Store', () => {

  let store;
  beforeEach(() => {
    store = new Store(countReducer, 0);
  })

  it('sets initial state', () => {
    expect(store.getState()).toEqual(0);
  });

  it('applies the reducer to the previous state', () => {
    store.dispatch(add(1));
    expect(store.getState()).toEqual(1);
    store.dispatch(subtract(1));
    expect(store.getState()).toEqual(0);
  });

  it('only accepts actions that are objects with a type property', () => {
    expect(() => store.dispatch(1)).toThrow();
    expect(() => store.dispatch({})).toThrow();
  });

  it('can fire off listeners on state change', () => {
    let callback = sinon.spy();
    expect(callback.callCount).toEqual(0);

    store.subscribe(callback);
    store.dispatch(add(1));
    expect(callback.callCount).toEqual(1);
    store.dispatch(add(1));
    expect(callback.callCount).toEqual(2);
  });

  it('can unsubscribe', () => {
    let callback = sinon.spy();
    expect(callback.callCount).toEqual(0);

    store.subscribe(callback);
    store.unsubscribe();
    store.dispatch(add(1));
    expect(callback.callCount).toEqual(0);
  });

  it('accepts a combined reducer', () => {
    const store = new Store(combineReducers({countReducer, toDoReducer}));
    store.dispatch(add(1));
    store.dispatch(addTodo({todo: 'sweep'}));
    expect(store.getState()).toEqual({countReducer: 1, toDoReducer:[{todo: 'sweep'}]});
  });

});
