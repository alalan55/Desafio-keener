export const nomeValido = value => {
    let nomeEhValido = value.length < 2 ? false : true
    return nomeEhValido
}
export const quantidadeValida = value => {
    let quanditadeEhValida = value <= 0 ? false : true
    return quanditadeEhValida
}
export const precoValido = value => {
    let precoEhValido = value <= 0 ? false : true
    return precoEhValido
}