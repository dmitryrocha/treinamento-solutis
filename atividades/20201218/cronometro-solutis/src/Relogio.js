import React from "react"
import './App.css'

class Relogio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hora: new Date(),
        }
    } 

    horaCerta(){
        this.setState({
            hora: new Date()
        })
    }

    componentDidMount() {
        this.hora = setInterval(() => this.horaCerta(), 1000)
    }  
    render() {
        return(
            <div>
                <h1 className="my-clock">{this.state.hora.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Relogio