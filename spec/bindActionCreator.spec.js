import Store from '../src/store';
import {countReducer} from './helpers/reducers';
import bindActionCreator from '../src/bindActionCreator'
import {add} from './helpers/actionCreators';

describe('bindActionCreator', () => {
  it('combines action with dispatching', () => {
    const store = new Store(countReducer, 0);
    const action = add;
    const addDispatch = bindActionCreator(action, store);
    addDispatch(1);
    expect(store.getState()).toEqual(1);
  });
});
