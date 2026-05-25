import { useState } from "react"

export function Counter(){
    const[counter, setCounter] = useState<number>(0);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((c) => c+1 )} >Order one more time</button>
        </div>
    )
}