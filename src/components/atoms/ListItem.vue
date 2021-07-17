<template>
   <li>
       <div class="nome">
           <span class="title">Nome</span>
           <span class="text">{{name}}</span>
       </div>
       <div class="preco">
           <span class="title">Preco</span>
           <span class="text">{{preco}}</span>
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
   // border: 1px solid;
    display: flex;
    margin: .5rem 0;
    border-radius: 5px;
    padding: .5rem;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; 
       box-shadow:  20px 20px 50px rgba(0,0,0,0.2);
  background: rgba(255,255,255,0.1);
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.5);
  border-left: 1px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(5px);
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