import React, {useEffect, useState} from 'react'
import './App.css'

const Relogio = props => {
    const [data, setdata] = useState(new Date())

    useEffect(() => {
        var timer = setInterval( () => tickTack(), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    });

    function tickTack() {
        setdata(new Date())
    }

    return (
        <div>
            <h1 className="my-clock">{data.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Relogio