import ItemDetailList from "../ItemDetailList/ItemDetailList";
import ItemCounter from "../ItemCounter/ItemCounter";
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

const ItemDetail = ({ id, price, title, thumbnail, attributes, order_backend }) => {

    const [att, setAtt] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setAtt(attributes);
    }, [attributes]);

    const {getProductQuantity} = useContext(CartContext)
    const productQuantity = getProductQuantity(id)

    return (
        <div class='m-3 shadow-lg p-3 mb-5 bg-white rounded'>
            <div class="card m-3">
                <div class="row g-0">
                    <header >
                        <button class='bg-primary border-primary'
                            onClick={() => navigate(-1)}><i class="bi bi-arrow-90deg-left text-light fs-4"></i>
                        </button>
                    </header>
                    <picture class="col-md-4">
                        <img class="card-img m-1" src={thumbnail} alt={title} />
                    </picture>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <ul class="list-group list-group-flush">
                                <ItemDetailList atribute={att} />
                            </ul>
                        </div>
                    </div>
                    <footer class='card-footer text-center'>
                        <p class="card-text fs-6">Stock disponible: {order_backend}</p>
                        <ItemCounter id={id} price={price} title={title} thumbnail={thumbnail} stock={order_backend} initial={productQuantity}/>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;