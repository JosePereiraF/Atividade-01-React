import { useEffect, useState } from "react";

export function HoraLocal(){
    const [horaAtual, setHoraAtual]= useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=>{

            setHoraAtual(new Date())
        },1000)
    })
    
    return(
        <>
        <h1>{horaAtual.toLocaleTimeString()}</h1>
        </>
    )
}