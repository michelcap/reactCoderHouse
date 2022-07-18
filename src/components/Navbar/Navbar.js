import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return(
    
    <nav class="navbar navbar-dark bg-dark">
        <div>
            <h1 class="h1 link-light">Automoviles</h1>
        </div>
        <div class="btn-group">
            <Button>Autos</Button>
            <Button>Camionetas</Button>
            <Button>Omnibus</Button>
            <Button>Camiones</Button>
            <Button>Electricos</Button>
        </div>
        <div>
            <CartWidget/>
        </div>
    </nav>
    )
}

export default Navbar