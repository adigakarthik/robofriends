import {CHANGE_SEARCHFEILD} from './constants'

export const setSearchFeild =(text)=>{  
    return {
    type: CHANGE_SEARCHFEILD,
    payload: text,
}}