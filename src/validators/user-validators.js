export const nomeValido = (value) =>{
    let nomeEhValido = value.length > 3 ? true : false
    return nomeEhValido
}
export const emailValido = () =>{
    return true
    
}
export const senhaValida = (value) =>{
    let senhaEhValida = false;

    let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/; 
    let senhaMinimoOitoCaracteres = value.length > 8 ? true : false

    if(senhaMinimoOitoCaracteres){
        
        senhaEhValida = regex.test(String(value))
    }
    return senhaEhValida
}