import React,{useState, useEffect} from "react"; /* importacion del hook */

const ItemCount = ({stock, initial, informar}) => {

    
    const [setup, setSetup] = useState(0) 
    const [contador, setContador] = useState(initial); /* simpre dentro del componente para usar/ devuelve array*/

    useEffect(() => {   /* se ejecuta siempre que se renderiza se ejecuta todo el codigo y despues el effect no importa la ubicacion */
        console.log("ejecuta useEffect");
        
        setTimeout(()=>{       /* ingresa una funcion y tiempo demora en milisegundos */
            setSetup(setup +1);
        }, 2000);

    }, [contador]);/* variables de las que depende el useeffect - no se puede modificar el mismo estado que el array de dependencia */
    
    
    

    const incrementa = () => {
        if (contador < stock){
            setContador(contador+1);
        }        
        /* setUsers([...users,{name: "pepe"}]); *//* spred de users + el nuevo objeto */    
    };

    const decrementa = () => {
        if (contador > 0){
            setContador(contador-1);
        }            
    };

    const agregar = () => {
        if (contador>0){
          informar(contador);   
        }
                   

    };

    return(
        <div style={{background : "linear-gradient(to bottom right, #E3F0FF, #FAFCFF)", width:"40%", height:300, borderRadius:15, margin:50 ,boxShadow:"-17px 14px 46px -9px rgba(33,32,32,0.63)",}} >
        <div style={{display :"flex", width:70,justifyContent:"space-between", backgroundColor:"red", alignItems:"center", borderRadius:5, backgroundColor:"white",boxShadow:"-17px 14px 46px -9px rgba(33,32,32,0.63)"}}>       
        <button style= {{width:20, height:20, color: "red",}} onClick={decrementa}>-</button>
        <h4 style= {{fontSize:22, width:"50%", textAlign:"center"}}>{contador}</h4>
        <button style={{width:20, height:20}} onClick={incrementa}>+</button>
        </div> 
        <button style={{padding: 5, margin: 10 }}onClick={agregar}>Añadir a carrito</button>
        <h2>{setup}</h2>
        </div>
        
    )
}

export default ItemCount