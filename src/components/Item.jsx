/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
    return (
        <div className="producto">
            <div className="container card-group">
            <img src="https://placeholder.pics/svg/220x180" alt={producto.title} />
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <p>{producto.price}</p>
            <Link to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item