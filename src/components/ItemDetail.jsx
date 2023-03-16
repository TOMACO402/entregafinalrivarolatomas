import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col d-flex text-center justify-content-end">
                    <img className="itemimagen mt-5" src={item.imagen} alt={item.nombre} />
                </div>
                <div className="col d-flex mt-5">
                    <div>
                        <h1 className="itemnombre">{item.nombre}</h1>
                        <p className="itemdescripcion">{item.descripcion}</p>
                        <button className="itemprecio btn btn-outline">${item.precio}</button>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;