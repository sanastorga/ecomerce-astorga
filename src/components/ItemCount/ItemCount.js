
let countStyles={
    padding:'6px 25px',
    backgroundColor:'#d1d1d1'
}

function ItemCount({stock, initial, onAdd, setCount, count}){

    function restar(){
        if (count !== parseInt(initial)){
            setCount(count - 1)
        }
    }
    function sumar(){
        if (count !== parseInt(stock)){
            setCount(count + 1)
        }
    }
    

    return (<div className="card mx-5 contador">
    <div className="card-body d-flex justify-content-center flex-column align-items-center">
      <h5 className="card-title">Stock: {stock}</h5>
      <br></br>
      <div className='my-3'>
        <button onClick={()=>restar()} type='button' href="#" className="btn btn-primary">-</button>
        <span style={countStyles}>{count}</span>
        <button onClick={()=>sumar()} type='button' href="#" className="btn btn-primary">+</button>
      </div>
      <button type='button' onClick={onAdd} href="#" className="btn btn-primary botonAgregar">Agregar al carrito</button>
    </div>
  </div>)
}


export default ItemCount;