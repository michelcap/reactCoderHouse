import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const reference = query(collection(db, categoryId), where('id', '==', productId))
        getDocs(reference).then(response => {

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data();
                return {...data}
            });
            setProduct(productsAdapted[0])
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        });
    }, [productId, categoryId]);

    if (loading) {
        return (
            <picture class='d-flex justify-content-center'>
                <img src={"../../animation/loading.svg"} alt='loading' />
            </picture>
        );
    }
    return (
        <div class='d-flex justify-content-center'>
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;