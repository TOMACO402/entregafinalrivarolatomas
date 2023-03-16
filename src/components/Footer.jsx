import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import youtube from "./images/youtube.svg";
import logo2 from "./images/logo2.png";
import {NavLink } from "react-router-dom";

const Footer = () => {
    return(
        
        <div className="container ">
            <nav className="navbar fixed-bottom ">
                    <div className="container-fluid">
            <div className="row ">
                <div className="col ">
                    <a href={"/"} className="me-5"><img src={facebook} alt={"Facebook"} width={"30"} ></img></a>
                    <a href={"/"} className="me-5"><img src={instagram} alt={"Instagram"} width={"30"} ></img></a>
                    <a href={"/"} className="me-5"><img src={twitter} alt={"Twitter"} width={"30"} ></img></a>
                    <a href={"/"} className="me-5"><img src={youtube} alt={"Youtube"} width={"30"} ></img></a>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-10">
                    <ul className="nav">
                            <li class="nav-item">
                            <NavLink className="nav-link fw-bold" activeclassname={"active"} to={"/Politicas"}>Politicas de compra y devolución</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link fw-bold" activeclassname={"active"} to={"/Quienes"}>Quienes Somos</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href={"https://www.argentina.gob.ar/produccion/defensadelconsumidor/hacer-un-reclamo"}>Defensa al consumidor</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link fw-bold" href={"/"}>Contacto</a>
                            </li>
                    </ul>
                </div>
                <div className="col-md-2 text-center">
                    <p className="text--bd-dark fw-bold "> <img src={logo2} alt={"lacresta2"} width={100}></img>®LaCrestaSurfShop</p>
                </div>
            </div>
        </div>
        </nav>
        </div>
    )
}

export default Footer;