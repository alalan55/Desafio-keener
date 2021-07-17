<template>
   <li>
       <div class="elements">

            <div class="nome">
                <span class="title">Fornecedor</span>
                <span>{{fornecedor}}</span>
            </div>

            <div class="descricao">
                <span class="title">Descrição</span>
                <span>{{descricao}}</span>
            </div>

            <div class="preco_custo">
                <span class="title">Preço custo</span>
                <span>R$ {{preco_custo.toLocaleString()}}</span>
            </div>

            <div class="preco_venda">
                <span class="title">Preço venda</span>
                <span>R$ {{preco_venda.toLocaleString()}}</span>
            </div>

       </div>
       <div class="tipo_movimentacao">
            <span class="texto_movimentacao" :class="{entrada: $movimentacaoEstilo, saida: !$movimentacaoEstilo}">{{ $movimentacao}}</span>
       </div>
   </li>
</template>

<script>
    export default {
        props:['fornecedor', 'descricao', 'preco_custo', 'preco_venda', 'movimentacao'],
        computed:{
            $movimentacao(){
                return this.movimentacao == 0 ? 'Entrada' : 'Saída'
            },
            $movimentacaoEstilo(){
                return this.movimentacao == 0 ? true : false
            }
        }
    }
</script>

<style lang="scss" scoped>
li{
    list-style: none;
    display: flex;
    margin: .5rem 0;
    border-radius: 5px;
    padding: .5rem;
    justify-content: space-between;
    flex-wrap: wrap; 

    background: #1b1b21;

    
    .elements>div{
        display: flex;
        flex-direction: column;
        margin: 1rem .2rem;

        .title{
            font-size: .7rem;
            font-weight: 800;
        }
    }
    .texto_movimentacao{
        padding: .1rem;
        border-radius: 5px;
    }
    .entrada{
        background: rgb(51, 184, 51);
        color: white;
    }
    .saida{
       background: rgb(202, 69, 69);
        color: white;
    }
}

</style>