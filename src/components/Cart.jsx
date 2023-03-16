import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import trash from "./images/trash3.svg";

const Cart = () => {
    const {cart, clear, removeItem, cartTotal, cartSum} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="itemnombre alert alert-warning text-center" role="alert">No se encontraron Productos en el Carrito!</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <h1 className="itemnombre text-center">PRODUCTOS SELECCIONADOS</h1>
                <div className="col-md-12">
                    <table className="table my-5">
                        <tr>
                            <button className=" itemprecio mb-3 " colSpan={5}><Link className="btn btn" onClick={() => {clear()}}><b>VACIAR CARRITO</b></Link></button>
                        </tr>
                        {
                            cart.map(item => ( 
                                <tr className="compra bg-light" key={item.index}>
                                    <td className="text-start" width="10%"><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                    <td className="text-start align-middle" width="30%">{item.nombre}</td>
                                    <td className="text-center align-middle" width="20%">{item.quantity} x ${item.precio}</td>
                                    <td className="text-center align-middle" width="30%">${item.quantity * item.precio}</td>
                                    <td className="text-center" width="20%"><button type="button" className="btn btn-dark bg-light" onClick={() => {removeItem(item.index)}} title={"Eliminar Producto"}><img src={trash} alt={"Eliminar Producto"} width={22} /></button></td>
                                </tr>
                            ))
                        }
                        
                        <tr>
                            <td colSpan={3}>&nbsp;</td>
                            
                            <td className="itemprecio text-center btn btn-outline-dark mb-3 mt-3" width="40%"> Total a Pagar</td>
                            <td className="total text-center btn btn-outline-dark bg-light m-4 mt-5 mb-5"width="40%"><b>${cartSum()}</b></td>  
                            <td className="text-center mt-1 mb-5" ><Link to={"/checkout"}width="20%" className="itemprecio btn btn-outline-dark bg-success">Finalizar Compra</Link></td>
                            
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;