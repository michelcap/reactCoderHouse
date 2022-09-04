import { addDoc, collection, getDocs, query, where, writeBatch, documentId } from 'firebase/firestore';
import { useState, useContext } from 'react';
import { db } from '../../services/firebase';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [out, setOut] = useState();
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

    const createOrder = async () => {
        setIsLoading(true);
        setEmptyForm(false);
        const buyer = getBuyer();
        if (isObjEmpty(buyer)) {
            setTimeout(() => {
                navigate('/cart');
            }, 6000);
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

                const idCart = cart.map(prod => prod.id);

                const colletionRef = collection(db, 'products');

                const inFirestone = [];
                idCart.forEach(id => {
                    const ref = query(colletionRef, where('id', '==', id));
                    const productFromFirestone = getDocs(ref)
                        .then(res => res.docs.map(doc => {
                            const data = doc.data();
                            const stock = data.order_backend;
                            const title = data.title;
                            const docRef = doc.ref;
                            return ({ id: id, title: title, stock: stock, docRef: docRef });
                        }));
                    inFirestone.push(productFromFirestone);
                });

                const batch = writeBatch(db);
                const outOfStock = [];
                Promise.all(inFirestone).then(value => {
                    value.map(fireProd => {
                        cart.map(cartProd => {
                            if (fireProd[0].id === cartProd.id) {
                                const inStock = fireProd[0].stock;
                                const quantityProductInCart = getProductQuantity(cartProd.id);
                                if (inStock >= quantityProductInCart) {
                                    const descount = inStock - quantityProductInCart;
                                    const ref = fireProd[0].docRef;
                                    batch.update(ref, { 'order_backend': descount });
                                } else {
                                    const id = cartProd.id;
                                    const title = cartProd.title;
                                    outOfStock.push({ id: id, title: title });
                                }
                            }
                        });
                    });
                    if (outOfStock.length === 0) {
                        batch.commit();
                        const refOrder = collection(db, 'orders');
                        awaitId(refOrder, objOrder);
                        setTimeout(() => {
                            navigate('/');
                        }, 6000);
                        clearCart();
                        setOrderCreated(true);
                    } else {
                        setOut(outOfStock);
                        setTimeout(() => {
                            navigate('/cart');
                        }, 7000);
                        setOutOf(true);
                        setIsLoading(false);
                    }
                });

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
                        <p class="card-text fs-6">Hay productos fuera de stock, sera redirigido al carrito en 6 segundos</p>
                    </section>
                    <section class="card-body">
                        {out.map(prod =>
                            <p class="card-text fs-6">{prod.title}</p>
                        )}
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
                        <p class="card-text fs-6">Hay datos faltantes o incorrectos en el Formulario de datos Personales, sera redirigido al carrito en 5 segundos</p>
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