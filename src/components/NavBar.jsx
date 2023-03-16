import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const Navbar = () => {
    return(
        
        <div className="container mb-4">
            <div className="row">
                <div className="col mt-5">
                <nav className="navbar navbar-dark  fixed-top">
                    <div className="container-fluid">
                    <div className="col-md-1"><Logo/></div>
                        <Link className="navbar-brand text--bs-light" to={"/"}>LA CRESTA</Link>
                        <div className="col d-flex align-items-center justify-content-end me-5">
                              <CartWidget/>
                            </div>
                            
                        <button className="navbar-toggler bg-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon bg-black"></span>
                        </button>
                        <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><Logo/></h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/mujeres"}>Mujeres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/hombres"}>Hombres</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/niños"}>Niños</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/category/skateysurf"}>Skate & Surf</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/Politicas"}>Políticas de Compra y Devolución</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeclassname={"active"} to={"/Quienes"}>Quienes Somos</NavLink>
                            </li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Navbar;