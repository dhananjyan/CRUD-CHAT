import { reducer as formReducer } from 'redux-form'

import { authSlice } from "./authSlice";
import { pageSlice } from './pageSlice';

export default {
  [authSlice.name]: authSlice.reducer,
  [pageSlice.name]: pageSlice.reducer,
  form: formReducer
}