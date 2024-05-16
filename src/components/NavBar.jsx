import Carro from "./Carro"




const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Velas del Sur</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Velas Aromaticas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Velas Decorativas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Difusores y ceras</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contáctanos</a>
        </li>
      </ul>
    </div>
  </div>
  <Carro />
</nav>


    </>
    
  )
}

export default NavBar
