<template>
   <li>
       <div class="id">
           <span class="title">Id</span>
           <span class="text">#{{id}}</span>
       </div>
       <div class="nome">
           <span class="title">Nome</span>
           <span class="text">{{name}}</span>
       </div>
       <div class="preco">
           <span class="title">Preco</span>
           <span class="text">{{ $preco}}</span>
       </div>
   </li>
</template>

<script>
    export default {
        props:['id','name', 'preco', 'quantidade'],
        computed:{
            $total(){
                let total = this.preco * this.quantidade
                return total.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
            },
            $preco(){
                let precoFormatado = this.preco.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
                return precoFormatado
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
    transition: .2s ease-in-out;

    &:hover{
        background: #1f1f26;
    }

    
    &>div{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .nome{
        flex: 1 200px;
    }
    .preco{
        flex: 1 1 200px;
    }
    .id{
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