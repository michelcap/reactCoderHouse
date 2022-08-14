import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [gobalCategoryId, setGlobalCategoryId] = useState()

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const reference = categoryId ? categoryId : 'products'
        setGlobalCategoryId(reference)

        getDocs(collection(db, reference)).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data();
                return {id: doc.id, ...data}
            });
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId]);
    
    const greeting = categoryId ? `Filtrado: ${categoryId.toUpperCase()}` : 'Todos Los Productos';

    if (loading) {
        return (
            <picture class='d-flex justify-content-center'>
                <img src={"../../animation/loading.svg"} alt='loading' />
            </picture>
        );

    }
    return (
        <div class='container text-center'>
            <h2 class='h2'>{greeting}</h2>
            <ItemList products={products} categoryId={gobalCategoryId}/>
        </div>
    );
};

export default ItemListContainer;