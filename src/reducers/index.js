import { combineReducers } from 'redux';
import runtime from './runtime';
import navigation from './navigation';
import ted from './ted';

export default combineReducers({
  runtime,
  navigation,
  ted,
});
