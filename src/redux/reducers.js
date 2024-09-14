import {combineReducers} from 'redux';

//Importación de los reducers
import defaultReducer from "./default/defaultReducer";
import productReducer from "./products/productReducer";

const rootReducer = combineReducers({
    default: defaultReducer, 
    product: productReducer,

});


export default rootReducer;