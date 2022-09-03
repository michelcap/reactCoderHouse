import { addDoc, collection, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { useState, useContext } from 'react';
import { db } from '../../services/firebase';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const [outOf, setOutOf] = useState(false);
    const [emptyForm, setEmptyForm] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false);
    const [idOrderCreated, setIdOrderCreated] = useState();
    const { cart, getQuantity, getTotal, clearCart, getProductQuantity, getBuyer } = useContext(CartContext);
    const totalOrder = getTotal();
    const totalQuantity = getQuantity();
    const navigate = useNavigate();



    function isObjEmpty(obj) {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) return false;
        }
        return true;
    }

    const awaitId = async (refOrder, objOrder) => {
        try {
            setIsLoading(true);
            const addOrder = await addDoc(refOrder, objOrder);
            const w = addOrder.id;
            console.log(w);
            setIdOrderCreated(w);
            return (w);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    // const awaitCheck = async (refAll, prod, outOfStock) => {

    //     await getDocs(refAll)
    //         .then(response => {
    //             const prodMach = response.docs.map(doc => {
    //                 const batch = writeBatch(db);
    //                 // batch.update(doc.ref, {'order_backend': 50})
    //                 // batch.commit();
    //                 const data = doc.data();
    //                 const inStock = data.order_backend;
    //                 const quantityProductInCart = getProductQuantity(prod.id);
    //                 if (inStock >= quantityProductInCart) {
    //                     const descount = inStock - quantityProductInCart;
    //                     batch.update(doc.ref, { 'order_backend': descount });
    //                 } else {
    //                     outOfStock.push({ id: prod.id, title: prod.title });
    //                 }
    //                 if (outOfStock.length === 0) {
    //                     batch.commit();
    //                 }
    //                 return (outOfStock.length);
    //             });
    //             return (prodMach);
    //         })
    //         .catch(error => { console.log(error); });

    //     return(true)


    // };

    const createOrder = async () => {
        const outOfStock = [];
        console.log(outOfStock);
        setIsLoading(true);
        setEmptyForm(false);
        const buyer = getBuyer();
        if (isObjEmpty(buyer)) {
            setTimeout(() => {
                navigate('/cart');
            }, 7000);
            setIsLoading(false);
            setEmptyForm(true);
        } else {
            try {
                const objOrder = {
                    buyer: buyer,
                    items: cart,
                    totalQuantity,
                    totalOrder,
                    date: new Date()
                };

                const machProduct = cart.map(prod => {
                    const refAll = query(collection(db, 'products'), where('id', '==', prod.id));
                    // awaitCheck(refAll, prod, outOfStock);
 
                    getDocs(refAll)
                        .then(response => {
                            isCheck = false
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
                                    outOfStock.push({ id: prod.id, title: prod.title });
                                }
                                if (outOfStock.length === 0) {
                                    batch.commit();
                                }
                                return (outOfStock);
                            });
                            isCheck = true
                            return (prodMach);
                        }).catch(error => { console.log(error); });


                    // if (outOfStock.length === 0) {
                    //     const refOrder = collection(db, 'orders');
                    //     awaitId(refOrder, objOrder);
                    //     setTimeout(() => {
                    //         navigate('/');
                    //     }, 6000);
                    //     clearCart();
                    //     setOrderCreated(true);
                    // } else {
                    //     setTimeout(() => {
                    //         navigate('/cart');
                    //     }, 5000);
                    //     setOutOf(true);
                    //     setIsLoading(false);
                    // }

                    
                    console.log(isCheck)
                    if (true) {
                        if (outOfStock.length === 0) {
                            const refOrder = collection(db, 'orders');
                            awaitId(refOrder, objOrder);
                            setTimeout(() => {
                                navigate('/');
                            }, 6000);
                            clearCart();
                            setOrderCreated(true);
                        } else {
                            setTimeout(() => {
                                navigate('/cart');
                            }, 5000);
                            setOutOf(true);
                            setIsLoading(false);
                        }
                    }
                    return (outOfStock.length);
                });
                return (machProduct);
            } catch (error) {
                console.log(error);
            } finally {
            }
        }
    };

    if (isLoading) {
        return (
            <picture class='d-flex justify-content-center'>
                <img src={"../../animation/loading.svg"} alt='loading' />
            </picture>
        );
    }

    if (outOf) {
        return (
            <div class="d-flex justify-content-center">
                <article class='card text-center text-wrap w-25 m-4 p-0 shadow-lg p-3 mb-5 bg-white rounded'>
                    <heder class='card-header bg-danger bg-gradient'>
                        <h4 class='h6 text-white'>ERROR !</h4>
                    </heder>
                    <section class="card-body">
                        <p class="card-text fs-6">Hay productos fuera de stock, sera redirigido al carrito en 5 segundos</p>
                    </section>
                </article>
            </div>
        );
    }

    if (emptyForm) {
        return (
            <div class="d-flex justify-content-center">
                <article class='card text-center text-wrap w-25 m-4 p-0 shadow-lg p-3 mb-5 bg-white rounded'>
                    <heder class='card-header bg-warning bg-gradient'>
                        <h4 class='h6 text-white'>Alerta !</h4>
                    </heder>
                    <section class="card-body">
                        <p class="card-text fs-6">Hay datos faltantes o incorrectos en el Formulario de datos Personales, sera redirigido al carrito en 7 segundos</p>
                    </section>
                </article>
            </div>
        );
    }

    if (orderCreated) {
        return (
            <div class="d-flex justify-content-center">
                <article class='card text-center text-wrap w-25 m-4 p-0 shadow-lg p-3 mb-5 bg-white rounded'>
                    <heder class='card-header bg-success bg-gradient'>
                        <h4 class='h6 text-white'>Éxito !</h4>
                    </heder>
                    <section class='card-header bg-success bg-gradient'>
                        <h4 class='h6 text-white'>Código de Orden: {idOrderCreated}</h4>
                    </section>
                    <section class="card-body">
                        <p class="card-text fs-6">Su orden fue creada, sera redirigido en 5 segundos</p>
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