import { useEffect, useState } from "react";
import { Botao } from "../../components/Button/Button";


// criar varios estados onde cada um é uma cor e agregar um valor para esse estado
// Colocar um if para verificar o valor dos estados e sempre que o cara clicar somar 1 ao valor
//entrar na condicional do valor e trocar a cor da tela de fundo
//tentar usar if ternário

export function TrocarDeCor(){
    const [tela, setTela] = useState(0);

    const valor =()=> {
        setTela(tela+1);
        if(tela>3)setTela(0);
    }
    const cor = tela ==0 ?  "#0aa399": tela==1? "#7d84b2": tela==2 ?"#8fa6cb":"#556f7a";

    useEffect(()=>{
        document.body.style.background = cor;
    },[tela]);
   
    return(
        <>
        <body
        >
       <h1>{cor}</h1>
       <button onClick={valor}>Clique</button>
        </body>
        </>
    )
}