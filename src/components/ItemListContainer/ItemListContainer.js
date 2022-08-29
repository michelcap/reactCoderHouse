import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {getListContainer} from '../../services/firebase/firestore'
import {useAsync} from '../../hooks/useAsync'

const ItemListContainer = () => {

    const { categoryId } = useParams();
    const asyncGetListContainer = () => getListContainer(categoryId)
    const {data, error, isLoading} = useAsync(asyncGetListContainer, [categoryId])
    
    const greeting = categoryId ? `Filtrado: ${categoryId.toUpperCase()}` : 'Todos Los Productos';

    if (isLoading) {
        return (
            <picture class='d-flex justify-content-center'>
                <img src={"../../animation/loading.svg"} alt='loading' />
            </picture>
        );

    }
    if (error) {
        return (
            <h1>ERROR INTENTE MAS TARDE</h1>
        )
    }

    return (
        <div class='container text-center'>
            <h2 class='h2'>{greeting}</h2>
            <ItemList products={data} categoryId={categoryId}/>
        </div>
    );
};

export default ItemListContainer;