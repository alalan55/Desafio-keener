<template>
   <li>
       <div class="nome">
           <span class="title">Nome</span>
           <span class="text">{{name}}</span>
       </div>
       <div class="preco">
           <span class="title">Preco</span>
           <span class="text">{{preco.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}}</span>
       </div>
       <div class="quantidade">
           <span class="title">Quantidade</span>
           <span class="text">{{quantidade}}</span>
       </div>
       <div class="total">
           <span class="title">Total</span>
           <span class="text">{{$total.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}}</span>
       </div>

   </li>
</template>

<script>
    export default {
        props:['name', 'preco', 'quantidade'],
        computed:{
            $total(){
                let total = this.preco * this.quantidade
                return total
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
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; 
    background: #1B1B21;
    border-radius: 5px;

    
    &>div{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .nome{
        flex: 1 1 200px;
    }
    .preco{
        flex: 1 1 200px;
    }
    .quantidade{
        flex: 1 1 200px;
    }
    .total{
        flex: 1 1 200px;
    }

    .title{
        font-size: .7rem;
        color: rgb(150, 188, 228);
    }

  
}

  @media screen and (max-width: 886px){
        li{
            &>div{
               margin-top: 1.5rem;
            }
        }
    }

</style>