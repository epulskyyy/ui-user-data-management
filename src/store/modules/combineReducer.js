import { combineReducers } from 'redux';

import profesiReducer from './profesi/reducers';
import userReducer from './user/reducers';
import pendidikanReducer from './pendidikan/reducers';
const reducer = combineReducers({
  pendidikan: pendidikanReducer,
  user: userReducer,
  profesi: profesiReducer,
});

export default reducer;
