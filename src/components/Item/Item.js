import { Link } from 'react-router-dom';

const Item = ({ products }) => {
    return (
        <article class='card text-center text-wrap w-25 m-4 p-0'>
            <heder class='card-header'>
                <h4 class='h6'>{products.title}</h4>
            </heder>
            <picture class="bg-image hover-zoom">
                <img src={products.thumbnail} alt={products.title} />
            </picture>
            <section class="card-body">
                <p class="card-text fs-6 fw-bolder">Precio: {products.price} usd</p>
                <Link to={`/detail/${products.id}`} class="btn btn-light">Ver detalle del producto</Link>
                <p class="card-text fs-6">Stock disponible: {products.order_backend}</p>
            </section>
        </article>
    );
};

export default Item;