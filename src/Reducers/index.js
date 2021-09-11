import {combineReducers} from 'redux';
import auth_reducer from './Auth_redur';
import feed_reducer from './Feed_reducer';

const allReducers=combineReducers({
    auth:auth_reducer,
    feed:feed_reducer
});

export default allReducers;
