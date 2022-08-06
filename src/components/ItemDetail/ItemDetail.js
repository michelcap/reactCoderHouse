import ItemDetailList from "../ItemDetailList/ItemDetailList";
import { useState, useEffect } from 'react';

const ItemDetail = ({ title, thumbnail, attributes }) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(attributes);
    }, [attributes]);

    return (
        <div class='w-50 m-5' >

            <div class="card mb-3">
                <div class="row g-0">
                    <picture class="col-md-4">
                        <img class="card-img m-1" src={thumbnail} alt={title} />
                    </picture>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <ul class="list-group list-group-flush">
                                <ItemDetailList product={product}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;