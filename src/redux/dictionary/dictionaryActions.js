import { SET_DICTIONARY  } from "./defaultDictionary";

export const setDictionary =(dictionary)=>{
    return{
        type: SET_DICTIONARY,
        payload: dictionary,
    }  
}