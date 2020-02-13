import {createStore} from 'redux';
import reduce from './data.reducer';
export const store =createStore(reduce);