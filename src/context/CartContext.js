import {useState, createContext} from 'react'

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [buyer, setBuyer]= useState({})
    
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdate = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })
            setCart(cartUpdate)
        }
    }

    const addBuyer = (buyerToAdd) => {
        if(buyerToAdd != null){
            setBuyer(buyerToAdd)
        }
    }

    const getBuyer = () => {
        return (buyer)
    }

    const clearCart = () => {
        setCart([])
        setBuyer({})
    }

    const removeItem = (id) => {
        const newCartWhihoutProduct = cart.filter(prod => prod.id !==id)
        setCart(newCartWhihoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getCart = () => {
        return (cart)
    }

    const getQuantity = (id) => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }

    const getTotal = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity*prod.price
        })
        return accu
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.quantity
    }

    return (
        <CartContext.Provider value={{cart, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity, getCart, getTotal, addBuyer, getBuyer}}>
            {children}
        </CartContext.Provider>
    )
    
}

export default CartContext


