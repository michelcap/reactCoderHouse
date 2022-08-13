import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext);
    const quantity = getQuantity();

    return (
        <Link to='/cart'>
            <div class="text-warning fs-4 p-2 m-2">
                <i class="bi bi-cart3"></i>
                {quantity}
            </div>
        </Link>
    );
};

export default CartWidget;