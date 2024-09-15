import {SET_PRODUCTS} from './productTypes'

const initialState = {
    PRODUCTS : [
        {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
        {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
        {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
        {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
        {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
        {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
      ]

};

const productReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_PRODUCTS:{
            return{
                ...state,
                PRODUCTS: action.payload,
            }
        }
        default:
            return state;
    }
};

export default productReducer;