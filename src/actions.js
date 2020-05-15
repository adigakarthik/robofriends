import {CHANGE_SEARCHFEILD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from './constants'

export const setSearchFeild =(text)=>{  
    return {
    type: CHANGE_SEARCHFEILD,
    payload: text,
}}

//this is a higher order function & redux-thunk know this return a function
export const requestRobots= ()=> (dispatch) =>{
    dispatch({type:REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>dispatch({
        type:REQUEST_ROBOTS_SUCCESS,
        payload:data
    }))
    .catch(error=>dispatch({
        type:REQUEST_ROBOTS_FAILED,
        payload:error
    }))

}