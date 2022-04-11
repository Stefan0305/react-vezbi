import React, { useState } from "react";

function Lightbulb() {

    let onImg = "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/lightbulb_on.png";
    let offImg = "https://freesvg.org/img/afaulconbridge-Lightbulb-OnOff-2.png";
    const [textvalue, setTextValue] = useState("Button OFF");
    const [isOn, setIsOn] = useState(true);

    function clickHandler(){
        setIsOn(!isOn);
        
    }

    return <div>
        Switch
        <img style={{ width: 200, height: 200 }} src={isOn ? onImg : offImg} />
        <button onClick={ clickHandler }>{isOn ? "Button OFF" : "Button ON"}</button>
    </div>
}

export default Lightbulb