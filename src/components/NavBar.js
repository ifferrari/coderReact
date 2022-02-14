import CartWidget from "./CartWidget";

const NavBar = ({title}) => {
    return(
        <nav class ="menuContainer">
            <div>
                <h2>{title}</h2>
            </div>
            <div class="menuIndex">
                <div><a>Inicio</a></div>
                <div><a>Computadoras</a></div>
                <div><a>Tablets</a></div>
                <div><a>Contacto</a></div>
            </div>
            <div>
                <CartWidget label = 'cart' backgroundColor="black" colorText = "white" />
            </div>
        </nav>
    )
}


export default NavBar;

