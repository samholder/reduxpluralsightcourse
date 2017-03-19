import * as types from '../common/actionTypes';

export function createCourse(course){
    return {type : types.CREATE_COURSE, course};
}