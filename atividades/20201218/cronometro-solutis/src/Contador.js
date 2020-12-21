import React from "react"
import Button from './Buttons'
import LabelCronometro from './LabelCronometro'
import './App.css'

class Contador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            centesimos: 0,
            segundos: 0,
            minutos: 0,
            stop: true,
            nomeStop: "Play",
            parcial: "",
        }
    }   
    
    incrementar() {
        this.setState(
            (state) => {
                if(!this.state.stop) {
                    if(state.centesimos >= 100) {
                        this.zerarcentesimos()
                        this.incrementarSegundos()
                    }
                    if(state.segundos  >= 60) {
                        this.zerarSegundos()
                        this.incrementarMinutos()
                    }
                    return({centesimos: state.centesimos + 1})
                }
            }
        )
    }

    zerarcentesimos() {
        this.setState({centesimos: 0})
    }

    zerarSegundos() {
        this.setState({segundos: 0})
    }

    zerarMinutos() {
        this.setState({minutos: 0})
    }

    zerarCronometro() {
        this.setState({
            centesimos: 0,
            segundos: 0,
            minutos: 0,
            parcial:""
        })

    }

    pararCronometro() {
        this.setState({
            stop: !this.state.stop
        })
        if(this.state.stop)
            {this.setState({nomeStop: "Stop"})}
        else 
            {this.setState({nomeStop: "Play"})}
    }

    parcialCronometro() {
        let p = this.state.minutos+":"+this.state.segundos+":"+this.state.centesimos
        this.setState({
            parcial: this.state.parcial+"->"+p
        })
    }

    incrementarSegundos() {
        this.setState({segundos: this.state.segundos +1})
    }

    incrementarMinutos() {
        this.setState({minutos: this.state.minutos +1})
    }

    componentDidMount() {
        this.timer = setInterval(() => this.incrementar(), 1)
    }


    render() {
        return(
            <div>
                <h1 className="my-clock">{this.state.minutos}:{this.state.segundos}:{this.state.centesimos}</h1>
                <Button onClick={() => {this.zerarCronometro()}} label="Zerar" />
                <Button onClick={() => {this.pararCronometro()}} label={this.state.nomeStop} />
                <Button onClick={() => {this.parcialCronometro()}} label="Parcial" />
                <LabelCronometro name = {this.state.parcial} />
            </div>
        );
    }
}

export default Contador