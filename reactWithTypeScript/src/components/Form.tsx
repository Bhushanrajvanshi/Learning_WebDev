import React, { useState } from 'react'


interface OrderForm {
    onSubmit(onder: {name: string; cups: number}): void
}


export function Form({onSubmit}: OrderForm) {
    const[name, setName] = useState<string>('Masala');
    const[cups, setCups] = useState<number>(1);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        onSubmit({name, cups})
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Chai Name</label>
        <input 
            value={name} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        /> <br />

        <label>Number of Cups</label>
        <input 
            type='number'
            value={cups} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value) || 1)}
        /> <br />
        <button type='submit'>Order</button>
    </form>
  )
}
