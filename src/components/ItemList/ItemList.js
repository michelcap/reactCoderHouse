import Item from "../Item/Item";

const ItemList = ({ products, categoryId}) => {
    return (
        <div class='row justify-content-evenly'>
            {products.map(prod => <Item key={prod.id} products={prod} categoryId={categoryId}/>)}
        </div>
    );
};

export default ItemList;