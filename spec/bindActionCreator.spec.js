import Store from '../src/store';
import {countReducer} from './helpers/reducers';
import bindActionCreators, {bindActionCreator} from '../src/bindActionCreator'
import {add, subtract} from './helpers/actionCreators';

describe('bindActionCreators', () => {
  let store;
  beforeEach(() => {
    store = new Store(countReducer, 0);
  });

  it('combines action with dispatching', () => {
    const action = add;
    const addDispatch = bindActionCreator(action, store);
    addDispatch(1);
    expect(store.getState()).toEqual(1);
  });

  it('combines multiple actions', () => {
    const boundActions = bindActionCreators({add: add, subtract: subtract}, store);
    boundActions.add(1);
    expect(store.getState()).toEqual(1);
    boundActions.subtract(1);
    expect(store.getState()).toEqual(0);
  });
});
