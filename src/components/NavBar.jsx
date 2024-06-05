
import { NavLink } from "react-router-dom"
import categories from "../data/categorias.json"
import Carro from "./Carro";




const NavBar = () => {
console.log(categories);

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" className="nav-link">Inicio</NavLink>
            </li>
        {
              categories.map((category) => {
                  return (
                    <li className="nav-item" key={category.id}>
                      <NavLink to={`/category/${category.id}`} activeclassname="active" className="nav-link">
                        {category.nombre}
                      </NavLink>
                    </li>
                  )
              })
            }
      </ul>
      <Carro />
</nav>


    </>
    
  )
}

export default NavBar
