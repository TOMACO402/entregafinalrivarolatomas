import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import carrito from "./images/cart2.svg";


const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (cartTotal() > 0) ? 
        <Link to={"/cart"} className="carrito btn btn-outline-dark position-relative">
            <img src={carrito} alt={"Carrito"} width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">{cartTotal()}</span>
        </Link> : "";
}

export default CartWidget;