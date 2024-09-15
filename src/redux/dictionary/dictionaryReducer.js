import {SET_DICTIONARY} from './dictionaryTypes'

const initialState = {
    dictionary: 'Desarrollo FrontEnd con React',

};

const dictionaryReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_DICTIONARY:{
            return{
                ...state,
                dictionary: action.payload,
            }
        }
        default:
            return state;
    }
};

export default dictionaryReducer;