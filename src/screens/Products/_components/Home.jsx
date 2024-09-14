import { useSelector } from "react-redux";

const Home = ()=>{
    const productO = useSelector((state) => state.product);
    return(
        <>
            <h4>{productO.PRODUCTS}</h4>
        </>
    )
}

export default Home