import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, clear, cartSum} = useContext(CartContext);

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:{cart}, date:date, total:cartSum()};

        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            clear();
        });
    }

    return (
        <div className="container my-5">
            <div className="row">
                <h1 className="itemnombre text-center">FINALIZAR COMPRA</h1>
                <div className="col-md-3 text-center">
                    <form>
                        <div class="compra mb-3 mt-5">
                            <label htmlFor="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div class="compra mb-3">
                            <label htmlFor="email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div class="compra mb-1">
                            <label htmlFor="telefono" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" class="itemprecio btn btn-outline-black bg-success m-5" onClick={generarOrden}><h4>Generar Orden</h4></button>
                    </form>
                </div>
                <div className="col-md-9">
                    <table className="table mb-5 mt-5">
                        {
                            cart.map(item => ( 
                                <tr className="tabla" key={item.index}>
                                    <td className="compra text-start" width="10%"><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                    <td className="compra text-start align-middle" width="40%">{item.nombre}</td>
                                    <td className="compra text-center align-middle" width="20%">{item.quantity} x ${item.precio}</td>
                                    <td className="compra text-center align-middle" width="20%">${item.quantity * item.precio}</td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td colSpan={3}>&nbsp;</td>
                            <td className="itemprecio text-center btn btn-outline-dark mt-3 "width="50%">Total a Pagar</td>
                            <td width="70%" className="total text-center btn btn-outline-dark bg-light m-2 mb-5"><b>${cartSum()}</b></td>
                        </tr>
                    </table>
                </div>
            </div>
            {orderId ? <Navigate to={"/thankyou/" + orderId} /> : ""}
        </div>
    )
}


export default Checkout;