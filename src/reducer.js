import {CHANGE_SEARCHFEILD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from './constants'

const initialStateSearch ={
    searchFeild:''
}

export const searchRobots =
    (state = initialStateSearch,action={})=> { 
        switch(action.type){
            case CHANGE_SEARCHFEILD:
                //update state with new value for text
                return {...state,searchFeild:action.payload};
            default:
                return state;
        }

}

const initialStateRobots ={
    isPending:false,
    robots: [],
    error:''
}

export const requestRobots = (state=initialStateRobots, action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return{...state,isPending:true};
        case REQUEST_ROBOTS_SUCCESS:
            return {...state,isPending:false, robots:action.payload};
        case REQUEST_ROBOTS_FAILED:
            return {...state,isPending:false, robots:action.payload};
        default:
            return state;
    }
}