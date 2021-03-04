import {combineReducers} from 'redux';
import demo from './demo';
import authen from './authen';

export const reducers = combineReducers({
    demo,
    authen
});