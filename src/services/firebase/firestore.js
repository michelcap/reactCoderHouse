import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

export const getDetailContainer =  (productId) => {

    const reference = query(collection(db, 'products'), where('id', '==', productId))

    return getDocs(reference).then(response => {
        const productsAdapted = response.docs.map(doc => {
            const data = doc.data();
            return {...data}
        });
        return(productsAdapted[0])
    }).catch(error => {
        return error;
    })
}

export const getListContainer = (categoryId) => {
    let ref
    if (!categoryId) {
        ref = collection(db, 'products')
    } else {
        ref = query(collection(db, 'products'), where('type', '==', categoryId))
    }
    return getDocs(ref).then(response => {
        const productsAdapted = response.docs.map(doc => {
            const data = doc.data();
            return {id: doc.id, ...data}
        });
        return(productsAdapted)
    }).catch(error => {
        return(error)
    })
}
    
    