import {CHANGE_SEARCHFEILD} from './constants'

const initialState ={
    searchFeild:''
}

export const searchRobots =
    (state = initialState,action={})=> { 
        switch(action.type){
            case CHANGE_SEARCHFEILD:
                //update state with new value for text
                return {...state,searchFeild:action.payload};
            default:
                return state;
        }

}