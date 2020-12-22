import React, { useEffect, useState } from "react";
import Buttons from './Buttons'
import Labels from './Labels'

const Contador = props => {
    const [centesimos, setcentesimos] = useState(0);
    const [segundos, setsegundos] = useState(0);
    const [minutos, setminutos] = useState(0);
    const [stop, setStop] = useState(true);
    const [nomeStop, setnomeStop] = useState("Play");
    const [parcial, setparcial] = useState("");

    function incrementar() {
        if(!stop){
            if(centesimos >= 100) {
                setcentesimos(0)
                setsegundos((segundos) => segundos + 1)
            }
            if(segundos >= 60) {
                setsegundos(0)
                setminutos((minutos) => minutos + 1)
            }
            setcentesimos(centesimos => centesimos+1)
        }
    }

    const zerarCronometro = () => {
        setcentesimos(centesimos => 0)
        setsegundos(segundos => 0)
        setminutos(minutos => 0)
        setparcial(parcial => "")
    }

    const pararCronometro = () => {
        setStop(!stop);
        if(stop){
            setnomeStop("Stop")
        } else {
            setnomeStop("Play")
        }
    }

    const parcialCronometro = () => {
        let p = minutos+":"+segundos+":"+centesimos
        setparcial(parcial+"->"+p)
    }

    useEffect(() => {
       var timer = setInterval(() => incrementar(), 1);
       return function cleanup() {
           clearInterval(timer);
       }
    });

    return(
        <div>
            <h1 className="my-clock">{minutos}:{segundos}:{centesimos}</h1>
            <Buttons onClick={zerarCronometro} label="Zerar" />
            <Buttons onClick={pararCronometro} label={nomeStop} />
            <Buttons onClick={parcialCronometro} label="Parcial" />
            <Labels nome = {parcial} />
        </div>
    )
}


export default Contador

