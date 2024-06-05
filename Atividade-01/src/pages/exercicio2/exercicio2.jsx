import { useEffect, useState } from "react";

export function HoraLocal(){
    const [horaAtual, setHoraAtual]= useState(new Date());
    
    useEffect(()=>{
        setHoraAtual(new Date())
    })
    
    return(
        <>
        <h1>{horaAtual.toLocaleTimeString()}</h1>
        </>
    )
}