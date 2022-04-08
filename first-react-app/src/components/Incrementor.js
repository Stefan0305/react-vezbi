import React, { useState } from "react";

function Incrementor(props) {

    const [counter, setCounter] = useState(props.num);

    function increase(k) {
        setCounter(counter + k);
    }

    return <div>
        <div>{counter}</div>
        <div className="buttons">
            <button onClick={() => {
                increase(1)
            }}>+1</button>
            <button onClick={() => {
                increase(2)
            }}>+2</button>
            <button onClick={() => {
                increase(3)
            }}>+3</button>
        </div>
    </div>
};

export default Incrementor;

// btn.onClick = addEventListener(() => {
//     increase(k)
// })