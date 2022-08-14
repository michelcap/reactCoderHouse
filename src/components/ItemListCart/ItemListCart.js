import ItemCart from '../ItemCart/ItemCart';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const ItemListCart = ({ cart }) => {

    const { getTotal } = useContext(CartContext);
    const { clearCart } = useContext(CartContext);
    const total = getTotal();

    return (
        <div class='row justify-content-evenly'>
            {cart.map(prod => <ItemCart key={prod.id} product={prod} />)}
            <article class='card text-center w-75 m-2 p-2 shadow-lg bg-white rounded'>
                <section class="card-body row p-0 m-0 text-center align-items-center">
                    <div class="card-text fs-6 col-sm m-0 p-2">
                        <button onClick={() => clearCart()} type="button" class="btn btn-outline-danger btn-sm text-center fs-6">Limpiar Carrito</button>
                    </div>
                    <p class="card-text fs-6 fw-bolder col-sm m-0 p-2">Total: {total} usd</p>
                    <div class="card-text fs-6 col-sm m-0 p-2">
                        <button type="button" class="btn btn-outline-success btn-sm text-center fs-6">Crear Orden</button>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default ItemListCart;
