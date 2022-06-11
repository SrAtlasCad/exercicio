import React, { useState } from 'react';
const Listas = () => {
    //const [nomes, setNomes] = useState (["Lucas", "Cleiton", "Thales", "Julia", "Gomes", "Miguel", "Thomas", "Marcos", "Mario"])
    //const [nomesnovos, setNomesNovos] = useState ("")
    //const adicionarnome = ()=> {
        //setFrutas([...nomes, nomesnovos])
    //}

    const [frutas, setFrutas] = useState (["Laranja", "Banana", "Mamão", "Uva", "Siriguela", "Melão", "Abacaxi", " Açaí", "Amora"])
    const [frutanova, setFrutaNova] = useState ("")
    const adicionarFruta = ()=> {
        setFrutas([...frutas, frutanova])
    }

    return(
        
        //<ul>
           // {nomes.map((nome, index) => (
               //<li>{index}-{nome}</li>
            //))}
        //</ul>
        <>
        <ul>
        {frutas.map((frutas, index) => (
            <li key={index}>{index} - {frutas}</li>
        ))}
        </ul>
        
        <ul>
            {frutas.map((fruta, contador)=> (<li key={contador} > Fruta: {fruta} - Index: {contador + 1} </li>))}
        </ul>

        <input type="text" value={frutanova} onChange={(e) => setFrutaNova(e.target.value)}/>
        <input type="button" value="ADICIONAR" onClick={adicionarFruta}/>

        
        </>
        //<input type="text" value={nomesnovos} onChange={(e) => setNomesNovos(e.target.value)}/>
        //<input type="button" value="ADICIONAR" onClick={adicionarnome}/>

    )
}
export default Listas;