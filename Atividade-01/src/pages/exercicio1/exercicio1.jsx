import { useState } from "react";

export function Listar (){

    const lista =[
        {id: 1, name: "Faetec-san"},
        {id: 2, name: "Juinstem"},
        {id: 3, name: "Chispireto"},
        {id: 4, name: "Xablau"},
    ]
    const [listaNomes, setListaNomes]= useState(lista);
    const [novoNome , setNovoNome] = useState('');

    function adicionarNome(){
        if(novoNome.trim() !== ''){
            const EntradaNovoNome = {
                id: listaNomes.length +1,
                name: novoNome,
            }
            setListaNomes([...listaNomes, EntradaNovoNome]);
            setNovoNome('');
        }
    }
    return(
        <>
        <h1>Nomes</h1>

        <div>
            <ul>
                {listaNomes.map((nome)=>(
                    <li key={nome.id}>{nome.name} </li>
                ))
            
                }
            </ul>
            <input type="text" 
            value={novoNome}
            onChange={(e)=> setNovoNome(e.target.value)}
            placeholder="Digite um nome"
            />
            <br />
            <button onClick={adicionarNome}>Adicionar</button>
        </div>
        
        </>

    )
}