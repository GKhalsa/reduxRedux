import {countReducer} from './helpers/reducers';
import Store from '../src/store';

describe('Store', () => {

  it('sets initial state', () => {
    const store = new Store(countReducer, 0);
    expect(store.getState()).toEqual(0);
  });


});
