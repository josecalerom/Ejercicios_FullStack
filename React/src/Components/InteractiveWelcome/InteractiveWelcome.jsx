import { useState } from "react";
import { Welcome } from "../Welcome/Welcome";

export function InteractiveWelcome() {

    const [name, setName] = useState("")

    function handleInputName(event){
        const inputName = event.target.value
        setName(inputName)

    }

    return (
        <>
        <input type="text" name="name" onChange={handleInputName}/>
        <Welcome name={name}/>
        </>
    )
}