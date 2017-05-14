export default function bindActionCreator(action, store){
  return (...args) => {
    store.dispatch(action(...args));
  };
}
