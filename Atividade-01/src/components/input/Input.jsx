
export function Input({onChange,valor,type}){
    return(
        <input 
        type={type} 
        value={valor}
        onChange={onChange}
        />

    )
}