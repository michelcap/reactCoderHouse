import { Link } from "react-router-dom";
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (

        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid justify-content-evenly">
                <div>
                    <Link class='h1 p-2 m-2 link-light text-decoration-none' to='/'>Automoviles</Link>
                </div>
                <div class='text-end' >
                    <Link class='h1 link-light text-decoration-none' to='/'><i class="bi bi-house"></i></Link>
                </div>
                <div class="btn-group">
                    <Link class='btn btn-primary' to='category/sedan'>Sedan</Link>
                    <Link class='btn btn-primary' to='category/hatchback'>Hatch</Link>
                    <Link class='btn btn-primary' to='category/suv'>SUVs</Link>
                    <Link class='btn btn-primary' to='category/pickup'>Pick Up</Link>
                    <Link class='btn btn-primary' to='category/furgon'>Furgón</Link>
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;