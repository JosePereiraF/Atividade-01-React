import { useEffect, useState } from "react";
import { Botao } from "../../components/Button/Button";

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
                <input type="text" 
                value={novoNome}
                onChange={(e)=> setNovoNome(e.target.value)}
                />
                <br />
                <label htmlFor="idade">Idade:</label>
                <input type="number"
                value={novaIdade}
                onChange={(e)=> setNovaIdade(e.target.value)}
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="text" 
                value={novoEmail}
                onChange={(e)=> setNovoEmail(e.target.value)}
                />
                <br />
                <Botao title={"botão"} valor={"adicionar"} onclick={adicionaUsuario}/>
            </form>
        </div>
        </>
    )

}