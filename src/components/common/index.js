import {combineReducers} from 'redux';
import courses from '../course/courseReducer';
import applications from '../application/applicationReducer';

const rootReducer = combineReducers({
    courses,
    applications
});

export default rootReducer;