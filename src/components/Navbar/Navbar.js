import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (

        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <div>
                    <h1 class="h1 p-2 m-2 link-light ">Automoviles</h1>
                </div>
                <div class="btn-group">
                    <Button>Sedan</Button>
                    <Button>Hatch</Button>
                    <Button>SUVs</Button>
                    <Button>Pick Up</Button>
                    <Button>Furgón</Button>
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;