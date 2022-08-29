import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getDocs, collection, query, where } from 'firebase/firestore';
// import { db } from '../../services/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';

import {getDetailContainer} from '../../services/firebase/firestore'
import {useAsync} from '../../hooks/useAsync'

const ItemDetailContainer = () => {

    const { productId } = useParams();

    const asyncGetDetailContainer = () => getDetailContainer(productId)
    const {data, error, isLoading} = useAsync(asyncGetDetailContainer, [productId])

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
        <div class='d-flex justify-content-center'>
            <ItemDetail {...data} />
        </div>
    );
};

export default ItemDetailContainer;