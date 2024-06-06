import { useEffect, useState } from "react";
import { Botao } from "../../components/Button/Button";
import { Input } from "../../components/input/Input";

export function Formulario(){
    const [novoUsuario , setNovoUsuario]= useState('');
    const [novoEmail, setNovoEmail]= useState('');
    const [novoNome, setNovoNome] = useState('');
    const [novaIdade, setNovaIdade ] = useState('');
  
    function adicionaUsuario(){

        if(novoEmail.trim() !== ''){
            const EntradaUsuario = {
                name: novoNome,
                idade: novaIdade,
                email: novoEmail,
            };
            // setNovoUsuario(...novoUsuario,EntradaUsuario);
            console.log(EntradaUsuario);
            
        }
    }
    return(
        <>
        <h1>Formulario</h1>
        <div>
            <form onSubmit={(event)=>{
                event.preventDefault();
            }} >
                <label htmlFor="nome">Nome:</label>
                <Input
                valor={novoNome}
                type={"text"}
                onChange={(e)=> setNovoNome(e.target.value)}
                />
                <br />
                <label htmlFor="idade">Idade:</label>
                <Input
                type={"number"}
                valor={novaIdade}
                onChange={(e)=> setNovaIdade(e.target.value)}
                />
                <br />
                <label htmlFor="email">Email:</label>
                <Input
                valor={novoEmail}
                type={"text"}
                onChange={(e)=> setNovoEmail(e.target.value)}
                />
                <br />
                <Botao title={"botão"} valor={"adicionar"} onclick={adicionaUsuario}/>
            </form>
        </div>
        </>
    )

}