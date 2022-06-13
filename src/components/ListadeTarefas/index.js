import React, { useState } from 'react';
const ListadeTarefas = () => {
    const [item, setItem] = useState([ ])
    const [novoitem, setNovoItem]= useState (" ")
    const addLista = ()=> {setItem([ ])}

    return(
        <>
            <ul>
                {item.map((item, index) => (<li key={index}>{index} - {item}</li>))}
            </ul>

            <ul>
            {item.map((item, contador) => (<li key={contador} > Item: {item} - Index: {contador + 1} </li>))}
            </ul>

            <h1>Lista de compras</h1>
            O que deseja adicionar na sua lista? 
            <input type="text" value = {novoitem} onChange={(e) => setNovoItem(e.target.value)}/>
            <input type="button" value="Adicionar item na lista" onClick={addLista}/>
        </>
    )
}
export default ListadeTarefas;