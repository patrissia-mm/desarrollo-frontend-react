import {SET_NAME_MODULE} from './defaultTypes'

const initialState = {
    name: '',

};

const defaultReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_NAME_MODULE:{
            return{
                ...state,
                name: action.payload,
            }
        }
        default:
            return state;
    }
};