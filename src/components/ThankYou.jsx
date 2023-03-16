import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
    const {orderId} = useParams();

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    {orderId ? <div className="alert alert-success text-center" role="alert"><h3>GRACIAS POR TU COMPRA!</h3><p>Se generó una Orden de Compra con el ID: <b>{orderId}</b></p></div> : ""}
                    <Link to={"/"} className="itemprecio text-center btn btn-outline-dark mt-3">Volver al Menú Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;