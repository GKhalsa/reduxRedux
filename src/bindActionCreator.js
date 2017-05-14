export function bindActionCreator(action, store){
  return (...args) => {
    store.dispatch(action(...args));
  };
}

export default function bindActionCreators(actions, store){
  let boundActions = {};
  const keys = Object.keys(actions);
  for(let i = 0; i < keys.length; i ++){
    boundActions[keys[i]] = bindActionCreator(actions[keys[i]], store);
  }
  return boundActions;
}
