import { useState, useEffect } from "react";

const Contador =()=>{
    const [contador, setContador] = useState(10);

    const handleContador = ()=>{
        setContador(contador+1)
    };

    const handleContador2 = ()=>{
        setContador(contador-1)
    };

    //Esta función se ejecuta cuando el componenete se haya montado []
    useEffect(()=>{
        setContador(12);
    }, [])

    //Esta función se ejecuta cuando haya cambiado el valor de contador [contador]
    useEffect(()=>{
        if (contador === 15){
            alert('Contador es 15')
        }
    }, [contador])

     //Esta función se ejecuta cuando el componenete se desmonta
     useEffect(()=>{
        return()=>{
            console.log("El componente se desmonta")
        }
    })

    return(
        <>
            <h4>Componente Contador</h4>
            <h5>{contador}</h5>
            <div>
                <button onClick={handleContador}>Aumentar</button>
                <button onClick={handleContador2}>Disminuir</button>
            </div>
        </>
    )
};

export default Contador