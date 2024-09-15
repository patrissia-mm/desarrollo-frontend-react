import {combineReducers} from 'redux';

//Importación de los reducers
import defaultReducer from "./default/defaultReducer";
import productReducer from "./products/productReducer";
import dictionaryReducer from './dictionary/dictionaryReducer';

const rootReducer = combineReducers({
    default: defaultReducer, 
    product: productReducer,
    dictionary: dictionaryReducer,

});


export default rootReducer;