import { useState, useEffect } from 'react';

export const getProductsVehiculos = () => {

    return new Promise((resolve) => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=vehiculos`)
            .then(response => response.json())
            .then(json => {
                resolve(json.results);
            });
    })
};

export const getProductsById = (productId) => {

    const products = JSON.parse(localStorage.getItem('products'));

    return new Promise((resolve) => {
        resolve(products.find(product => product.id === productId))
    })
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryId}`)
            .then(response => response.json())
            .then(json => {
                resolve(json.results);                
            });
    })
};

/*
const products = [
    {
        id: '1', name: 'NISSAN VERSA', category: 'sedan',
        img: 'https://cdn.spincar.com/swipetospin-viewers/carone/0k_02_0004/20210601183920.IQEUHE7C/closeups/cu-0.jpg',
        stock: 5,
        description: 'NEW VERSA ADVANCE T/M'
    },
    {
        id: '2', name: 'Toyota', category: 'sedan',
        img: 'https://cdn.spincar.com/swipetospin-viewers/carone/0k_02_0004/20210601183920.IQEUHE7C/closeups/cu-0.jpg',
        stock: 5,
        description: 'NEW VERSA ADVANCE T/M'
    },
    {
        id: '3', name: 'hatch', category: 'hatch',
        img: 'https://cdn.spincar.com/swipetospin-viewers/carone/0k_02_0004/20210601183920.IQEUHE7C/closeups/cu-0.jpg',
        stock: 5,
        description: 'NEW VERSA ADVANCE T/M'
    },
    {
        id: '4', name: 'hatch', category: 'hatch',
        img: 'https://cdn.spincar.com/swipetospin-viewers/carone/0k_02_0004/20210601183920.IQEUHE7C/closeups/cu-0.jpg',
        stock: 5,
        description: 'NEW VERSA ADVANCE T/M'
    },
    {
        id: '5', name: 'SUVs', category: 'SUVs',
        img: 'https://cdn.spincar.com/swipetospin-viewers/carone/0k_02_0004/20210601183920.IQEUHE7C/closeups/cu-0.jpg',
        stock: 5,
        description: 'NEW VERSA ADVANCE T/M'
    },
    {
        id: '6', name: 'SUVs', category: 'SUVs',
        img: 'https://cdn.spincar.com/swipetospin-viewers/carone/0k_02_0004/20210601183920.IQEUHE7C/closeups/cu-0.jpg',
        stock: 5,
        description: 'NEW VERSA ADVANCE T/M'
    },
    {
        id: '7', name: 'Pick Up', category: 'Pick Up',
        img: 'https://cdn.spincar.com/swipetospin-viewers/carone/0k_02_0004/20210601183920.IQEUHE7C/closeups/cu-0.jpg',
        stock: 5,
        description: 'NEW VERSA ADVANCE T/M'
    },
    {
        id: '8', name: 'Pick Up', category: 'Pick Up',
        img: 'https://cdn.spincar.com/swipetospin-viewers/carone/0k_02_0004/20210601183920.IQEUHE7C/closeups/cu-0.jpg',
        stock: 5,
        description: 'NEW VERSA ADVANCE T/M'
    },
    {
        id: '9', name: 'Pick Up', category: 'Pick Up',
        img: 'https://cdn.spincar.com/swipetospin-viewers/carone/0k_02_0004/20210601183920.IQEUHE7C/closeups/cu-0.jpg',
        stock: 5,
        description: 'NEW VERSA ADVANCE T/M'
    },
];
*/