export const fornecedor = (value) =>{
    let fornecedorValido = value.length > 2 && value.length < 50 ? true : false
    return fornecedorValido
}
export const descricao = (value) =>{
    let descricaoValida = value.length > 2 && value.length < 100 ? true : false
    return descricaoValida
}
export const tipoMovimentacao = (value) =>{
    let movimentacaoValida = value == 0 || value == 1 ? true : false
    return movimentacaoValida
}
export const quantidade = (value) =>{
    let quantidadeValida = value > 0 ? true : false
    return quantidadeValida
}
