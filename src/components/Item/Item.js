import Counter from "../Counter/Counter";
import { Link } from 'react-router-dom';

const Item = ({ products }) => {
    return (
        <article class='card text-center text-wrap w-25 m-4 p-0'>
            <heder class='card-header'>
                <h3>{products.title}</h3>
            </heder>
            <picture>
                <img class="card-img-top" src={products.thumbnail} alt={products.title} />
            </picture>
            <section class="card-body">
                <p class="card-text">Precio: {products.price} usd</p>
                <Link to={`/detail/${products.id}`} class="btn btn-primary">Ver detalle del producto</Link>
                <p class="card-text">Stock disponible: {products.order_backend}</p>
            </section>
            <footer class='card-footer text-mured'>
                <Counter stock={products.order_backend} />
            </footer>
        </article>
    );
};

export default Item;