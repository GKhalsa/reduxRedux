import {countReducer} from './helpers/reducers';
import {add, subtract} from './helpers/actionCreators'
import Store from '../src/store';

describe('Store', () => {

  it('sets initial state', () => {
    const store = new Store(countReducer, 0);
    expect(store.getState()).toEqual(0);
  });

  it('applies the reducer to the previous state', () => {
    const store = new Store(countReducer, 0);
    store.dispatch(add(1));
    expect(store.getState()).toEqual(1);
    store.dispatch(subtract(1));
    expect(store.getState()).toEqual(0);
  });

  it('only accepts actions that are objects with a type property', () => {
    const store = new Store(countReducer, 0)
    expect(() => store.dispatch(1)).toThrow();
    expect(() => store.dispatch({})).toThrow();
  });

  


});
