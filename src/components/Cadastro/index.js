import React, { useState } from 'react'
const Cadastro = () => {
        const[nome, setNome]= useState("")
        const[idade, setIdade]= useState("")
        const[sexo, setSexo]= useState("")
        const[cidade, setCidade]= useState("")

        const handleCadastro = (e) =>{
            const dados = `Nome: ${nome}. Idade: ${idade}. Sexo: ${sexo}. Cidade: ${cidade}`
            console.log(dados)

            if(nome === "" || idade === "" || sexo === "" || cidade === ""){
                alert("Preencha todos os dados!")
            } else {
            setNome("")
            setIdade("")
            setSexo("")
            setCidade("")
            alert("Cadastro realizado com sucesso")
            }
        }

return(
    <form>
        <label>
            Nome:
            <input type="text" placeholder="Digite seu nome" value={nome} onChange={(info) => {setNome(info.target.valeu)}}/>
        </label>
        <br/>
        <label>
            Idade:
            <input type="text" placeholder="Digite seu idade"value={idade} onChange={(info) => {setIdade(info.target.valeu)}}/>
        </label>
        <br/>
        <label>
            Sexo:
            <input type="text" placeholder="Digite seu sexo"value={sexo} onChange={(info) => {setSexo(info.target.valeu)}}/>
        </label>
        <br/>
        <label>
            Cidade:
            <input type="text" placeholder="Digite seu cidade"value={cidade} onChange={(info) => {setCidade(info.target.valeu)}}/>
        </label>
        <input type="button" value="CADASTRAR" onClick={handleCadastro}/>
    </form>
);
}

export default Cadastro;