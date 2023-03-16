import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="group mt-2">
                        <button className="itemprecio btn " onClick={decrementarStock}>-</button>
                        <button className="itemprecio btn">{items}</button>
                        <button className="itemprecio btn" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="terminar btn m-4">Terminar </Link> : <button className="terminar btn m-4" onClick={addToCart}>Agregar</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;