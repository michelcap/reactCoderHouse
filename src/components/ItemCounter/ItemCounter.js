import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemCounter = ({ id, price, title, stock, initial = 1 }) => {

    const [count, setCount] = useState(initial);
    const [quantityToAdd, setQuantityToAdd] = useState(0);
    const { addItem } = useContext(CartContext);
    
    useEffect(() => {
        if (initial !== 1) {
            setCount(initial)
        }
    }, [initial]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleOnAdd = (count) => {
        setQuantityToAdd(count);
        const quantity = count;

        const productToAdd = {
            id, title, price, quantity
        };

        addItem(productToAdd);
    };

    const Count = ({ onConfirm, count }) => {

        return (
            <div class="text-center">
                <div class="btn-group text-center" role="group">
                    <i onClick={decrement} type="button" class="text-primary bi bi-dash-circle-fill fs-5"></i>
                    <p class='fs-4 ms-4 me-4 '>{count}</p>
                    <i onClick={increment} type="button" class="text-primary bi bi-plus-circle-fill fs-5"></i>
                </div>
                <div>
                    <button onClick={() => onConfirm(count)} type="button" class="btn btn-outline-success btn-sm text-center fs-6">Agregar al Carrito</button>
                </div>
            </div>
        );
    };

    return (
        quantityToAdd === 0 ? (
            <Count onConfirm={handleOnAdd} count={count} />
        ) : (
            <Link to='/cart' class="btn btn-warning">Finalizar Compra</Link>
        )
    );
};

export default ItemCounter;