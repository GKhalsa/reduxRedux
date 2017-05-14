export default function combineReducers(reducers){
  const reducerKeys = Object.keys(reducers);
  let allReducers = {};

  for (let i = 0; i < reducerKeys.length; i++){
    let key = reducerKeys[i];
    allReducers[key] = reducers[key];
  }

  const allReducerKeys = Object.keys(allReducers);

  return function injectReducersToState(state = {}, action){

    const nextState = {};
    for(let i = 0; i < allReducerKeys.length; i++){
      const key = allReducerKeys[i];
      const reducer = allReducers[key];

      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
    }
    return nextState;
  };
}
