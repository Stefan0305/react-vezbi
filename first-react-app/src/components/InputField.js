import React, { useState } from "react";

function InputField() {

    const [textValue, setTextValue] = useState("");
    const [items, setItems]= useState([]);

    return (
        <div>
            Greeting<br />
            <input
                type="text"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)
                } />

            <ul>
                {items.map(
                    (el) => {
                       return <li key={el}>{el}</li>
                    }
                )}
            </ul>

                
            <button onClick={
                () => {
                    setItems([...items, textValue]);
                    setTextValue("");
                }
            }>Add item</button>
        </div>
    );
}

export default InputField;