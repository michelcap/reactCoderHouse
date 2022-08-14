import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ItemListCart from '../ItemListCart/ItemListCart';

const ItemCartContainer = () => {

    const { getQuantity } = useContext(CartContext);
    const quantity = getQuantity();

    const { getCart } = useContext(CartContext);
    const cart = getCart();

    return (
        quantity !== 0 ? (
            <ItemListCart cart={cart} />
        ) : (
            <div class='row justify-content-evenly'>
                <div class='w-50 shadow-lg p-3 m-5 bg-white rounded'>
                    <div class="card m-3">
                        <div class="row g-0">
                            <header >
                                <h1 class="card-title text-center m-3">CARRITO VACIO</h1>
                            </header>
                            <div class="card-body">
                                <h2 class="card-text h4 col-sm m-0 p-2 text-center">Regresa y mira todos los productos</h2>
                            </div>
                            <footer class='card-footer text-center'>
                                <Link to='/' class="btn btn-outline-success">Todos los Producatos</Link>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>

        )
    );
};

export default ItemCartContainer;