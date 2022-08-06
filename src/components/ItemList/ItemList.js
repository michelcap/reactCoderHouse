import Item from "../Item/Item";

const ItemList = ({ products }) => {

    localStorage.setItem('products', JSON.stringify(products));

    return (
        <div class='row justify-content-evenly'>
            {products.map(prod => <Item key={prod.id} products={prod}/>)}
        </div>
    );
};

export default ItemList;