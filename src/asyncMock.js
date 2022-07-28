const products = [
    {
        id: '1', name: 'NISSAN VERSA', category: 'sedan', 
        img: 'https://cdn.spincar.com/swipetospin-viewers/carone/0k_02_0004/20210601183920.IQEUHE7C/closeups/cu-0.jpg', 
        stock: 5, 
        description:'NEW VERSA ADVANCE T/M'
    }
]

export const getProductsVehiculos = () => {
    return new Promise((resolve) => {
        resolve(products)
        
        
        // setTimeout(() => {
        //     resolve(products)
        // }, 2000)
    })
}
