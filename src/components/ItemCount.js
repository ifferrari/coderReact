import {Component} from "react";

class ItemCount extends Component {
    constructor(props, initial){
        super(props)
        this.state = {count: {initial}}
    }
    decrement = () => {
        this.setState ({
            count: this.state.count -1
        })
    }
    increment = () => {
        this.setState ({
            count: this.state.count +1
        })
    }

render (){
    return(
        <>
            <h3>Contador Objeto</h3>
            <h3>{this.state.count}</h3>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.increment}>+</button>
            <onAdd />{count}
        </>
    )
}

}