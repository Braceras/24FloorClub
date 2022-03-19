function ItemNew({ producto }) {
    return (
        <div className=''>
            <img className='' src={producto.img} alt="Nonchalantly" style={{width:"15rem"}}/>
            <h2>{producto.nombre}</h2>
            <p>{producto.detalle}</p>
        </div>


    )
}

export default ItemNew