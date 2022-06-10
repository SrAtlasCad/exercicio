import React from 'react'
import "./styles.css"

const SegundoComponente = () => {
    return(
    <form>
        <label>
            <b>Seu nome: </b>
            <input type ="text"/>
        </label>
        <label style={{display:'block'}}>
            <b>Senha: </b>
            <input type="text"/>
        </label>
        <input type="submit" valeu="Entrar"/>
    </form>
    );
    }
    
    export default SegundoComponente;