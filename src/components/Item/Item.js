import Counter from "../Counter/Counter";

const Item = ({ products }) => {
    return (
        <div class='card text-center'>
            <div class='card-header'>
                <h3>{products.name}</h3>
            </div>
            <img src={products.img} class="card-img-top" alt={products.name} />
            <div class="card-body">

                <p class="card-text">{products.description}</p>
                <a href="#" class="btn btn-primary">Ver detalle del producto</a>
                <p class="card-text">Stock disponible: {products.stock}</p>
            </div>
            <div class='card-footer text-mured'>
                <Counter stock={products.stock}/>
            </div>
        </div>
    );
};

export default Item;