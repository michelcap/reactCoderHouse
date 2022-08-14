import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const ItemCart = ({ product }) => {

    const { removeItem } = useContext(CartContext);
    const subTotal = product.price*product.quantity

    return (
        <article class='card text-center w-75 m-2 p-2 shadow-lg bg-white rounded'>
            <section class="card-body row p-0 m-0 text-center align-items-center">
                <picture class="col-sm text-center align-middle">
                    <img src={product.thumbnail} alt={product.title} />
                </picture>
                <p class='card-text fs-6 col-sm m-0 p-2'>{product.title}</p>
                <p class="card-text fs-6 col-sm m-0 p-2">{product.price} usd</p>
                <p class="card-text fs-6 col-sm m-0 p-2">Qty: {product.quantity}</p>
                <p class="card-text fs-6 fw-bolder col-sm m-0 p-2">Subtotal: {subTotal} usd</p>
                <div class="card-text fs-6 col-sm m-0 p-2">
                    <button onClick={() => removeItem(product.id)} type="button" class="btn btn-outline-danger btn-sm text-center fs-6">Eliminar</button>
                </div>
            </section>
        </article>
    );
};

export default ItemCart;