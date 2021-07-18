<template>
   <li>
       <div class="nome">
           <span class="title">Nome</span>
           <span class="text">{{name}}</span>
       </div>
       <div class="preco">
           <span class="title">Preco</span>
           <span class="text">R$ {{preco.toLocaleString()}}</span>
       </div>
       <div class="quantidade">
           <span class="title">Quantidade</span>
           <span class="text">{{quantidade}}</span>
       </div>

   </li>
</template>

<script>
    export default {
        props:['name', 'preco', 'quantidade']
        // props:{
        //         name:{type: String, default: 'Não informado'},
        //         preco:{type: String ||  Number, default: 'Não informado'},
        //         quantidade:{type: String || Number, default: 'Não informado'},
        // }
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
        flex: 1 1 300px;
    }
    .preco{
        flex: 1 1 300px;
    }
    .quantidade{
        flex: 1 1 300px;
    }

    .title{
        font-size: .7rem;
    }
}

</style>