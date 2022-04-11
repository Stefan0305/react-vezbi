import React, { useState } from "react";

function Send() {

    const [textValue, setTextValue] = useState("");

    return <div>
        <input value={textValue} onChange={(e) => setTextValue(e.target.value)} />
        <button disabled={textValue === "" ? true : false} onClick={() => {console.log(textValue)}}>Send</button>
    </div>
}



export default Send