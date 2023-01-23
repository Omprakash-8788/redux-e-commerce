import {configureStore} from '@reduxjs/toolkit';
import reducers from './Reducer/index';

const store = configureStore({
    reducer: reducers,
  });

export default store;