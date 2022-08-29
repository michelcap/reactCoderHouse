import { addDoc, updateDoc, collection, doc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
import { useState, useContext, useEffect } from 'react';
import { db } from '../../services/firebase';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

import { getDetailContainer } from '../../services/firebase/firestore';
import { useAsync } from '../../hooks/useAsync';


const Checkout = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [refOrder, setRefOrder] = useState();
    const [orderCreated, setOrderCreated] = useState(false);
    const { cart, getQuantity, getTotal, clearCart, getProductQuantity } = useContext(CartContext);
    const totalOrder = getTotal();
    const totalQuantity = getQuantity();
    const navigate = useNavigate();

    const createOrder = async () => {
        setIsLoading(true);
        try {
            const objOrder = {
                buyer: {
                    firstName: 'Sebastian',
                    lastName: 'Zuviria',
                    phone: '123456789',
                    address: 'direccion 123'
                },
                items: cart,
                totalQuantity,
                totalOrder,
                date: new Date()
            };
            const outOfStock = [];
            const machProduct = cart.map(prod => {
                const refAll = query(collection(db, 'products'), where('id', '==', prod.id));
                getDocs(refAll)
                    .then(response => {
                        const prodMach = response.docs.map(doc => {
                            const batch = writeBatch(db);
                            // batch.update(doc.ref, {'order_backend': 50})
                            // batch.commit();
                            const data = doc.data();
                            const inStock = data.order_backend;
                            const quantityProductInCart = getProductQuantity(prod.id);
                            if (inStock >= quantityProductInCart) {
                                const descount = inStock - quantityProductInCart;
                                batch.update(doc.ref, { 'order_backend': descount });
                            } else {
                                outOfStock.push(prod.id);
                            }
                            if (outOfStock.length === 0) {
                                batch.commit();
                            }
                            return (prod.id);
                        });
                        return (prodMach);
                    }).catch(error => { console.log(error); });
                if (outOfStock.length === 0) {
                    const refOrder = collection(db, 'orders');
                    const addOrder = addDoc(refOrder, objOrder);
                    setTimeout(() => {
                        navigate('/');
                    }, 5000);
                    setRefOrder(addOrder.then((response) => (response.id)))
                    clearCart();
                    setOrderCreated(true);
                }
                return (prod.id);
            });
            return (machProduct);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <picture class='d-flex justify-content-center'>
                <img src={"../../animation/loading.svg"} alt='loading' />
            </picture>
        );
    }

    if (orderCreated) {
        return (
            <div class="d-flex justify-content-center">
                <article class='card text-center text-wrap w-25 m-4 p-0 shadow-lg p-3 mb-5 bg-white rounded'>
                    <heder class='card-header bg-success bg-gradient'>
                        <h4 class='h6 text-white'>Exito!</h4>
                    </heder>
                    <section class="card-body">
                        <p class="card-text fs-6">Su orden fue creada, sera redirigido en 4 segundos</p>
                    </section>
                </article>
            </div>
        );
    }

    return (
        <div class="d-flex justify-content-center">
            <article class='container card text-center text-wrap w-25 m-4 p-0 shadow-lg p-3 mb-5 bg-white rounded'>
                <heder class='card-header'>
                    <h4 class='h6'>Confirmar Orden</h4>
                </heder>
                <section class="card-body">
                    <button type="button" class="btn btn-outline-success btn-sm text-center fs-6" onClick={createOrder}>Enviar Orden</button>
                </section>
            </article>
        </div>
    );
};

export default Checkout;