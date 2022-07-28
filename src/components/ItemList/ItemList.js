import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map(prod => <Item key={prod.id} products={prod}/>)}
        </div>
    );
};

export default ItemList;