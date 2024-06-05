import { useState } from "react";
import { Botao } from "../../components/Button/Button";

export function Buscar(){
    // criar uma barra de pesquisa que busque informações que estao dentro do meu arrayList
    // Amanha tentar implemetar um get da minha api nisso                 
    const [busca, setBusca]= useState('');
    const lista =[
        {id : 1, nome:"Chispireto"},
        {id : 2, nome:"João"},
        {id : 3, nome:"Chris"},
        {id : 4, nome:"Ronaldo"},
        {id : 5, nome:"Xablau"},
    ]
    const pesquisa = lista.filter(e => (e.nome.toLowerCase()).includes(busca.toLowerCase()));
    console.log(pesquisa);
    return(
        <>
        <h1>Titulo</h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
        }}>
            <label htmlFor="nome">nome: </label>
            <input type="text" 
            value={busca}
            onChange={(e)=> setBusca(e.target.value)}
            placeholder="Pesquisa"
            />
            <br />
            <ul >
                {pesquisa.map((m)=> (
                    <li key={ m.id} > {m.nome}</li>
                ))}
            </ul>
            
        </form>
        </>
    )
}