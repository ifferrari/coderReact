
const CartWidget = ({label = 'CartWidget', backgroundColor = 'black', colorText = 'white' }) => {
    return(
        <button className= "myButton" style ={{backgroundColor, color: colorText}}><img src="proyecto/reactaplication/src/components/descarga.png" height="2" width="2">{label}</img></button>
    )
}

export default CartWidget