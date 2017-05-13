import Store from '../src/store';
import combineReducers from '../src/combineReducers';
import {countReducer, toDoReducer} from './helpers/reducers';

describe('combineReducers', () => {

  it('returns a combined reducer object that maps state keys to reducers', () => {
    const reducer = combineReducers({
      countReducer,
      toDoReducer
    });

    expect(reducer).toEqual({countReducer: 0, toDoReducer: []});

  });

});
