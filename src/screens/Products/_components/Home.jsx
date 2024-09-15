import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../../redux/products/productActions";

const Home = ()=>{
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setProducts([
            {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
            {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
            {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
            {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
            {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
            {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
          ]))
    }, [])

    return(
        <>
            <h4>{JSON.stringify(product.PRODUCTS)}</h4>
        </>
    )
}

export default Home