<template>
  <section>
    <div class="title">
      <span>Insira as informações sober a movimentação</span>
    </div>
    <form @submit.prevent="cadastrar">
       <Input type="string" nome="Fornecedor" @value="fornec" :enviado="enviado" />
       <Input type="string" nome="Descrição" @value="descr" :enviado="enviado" />

       <select name="tipoMovimentacao" id="tipoMovimentacao" v-model="select">
         <option disabled value="">Tipo de movimentação</option>
         <option value="0">Entrada</option>
         <option value="1">Saída</option>
       </select>
       
      <Input type="number" nome="Preço de custo" @value="preco_custo" :enviado="enviado" />
      <Input type="number" nome="Preço de venda" @value="preco_venda" :enviado="enviado" />
      <button type="submit" class="btn">Registrar movimentação  </button>
    </form>
    <div class="success" v-if="success">
      <span>Movimentação inserida com sucesso</span>
    </div>
    <div class="error" v-if="erro">
      <span>Ops, ocorreu algum erro para cadastrar movimentação</span>
    </div>
  </section>
</template>

<script>
import { Input } from "@/components/atoms";
export default {
    data(){
        return{
            fornecedor: '',
            descricao: '',
            precoCusto: 0,
            precoVenda: 0,
            select: '',
            success: false,
            erro: false,
            enviado: false
        }
    },
  components: {
    Input,
  },
  methods: {
    async cadastrar() {
      let movimentacao ={
          fornecedor: this.fornecedor,
          descricao: this.descricao,
          preco_custo: this.precoCusto,
          preco_venda: this.precoVenda,
          tipo_movimentacao: +this.select
      }
    
     let response = await this.$store.dispatch('cadastrarMovimentacao', movimentacao)

     if(response == 201){
       this.limparCampos();
       this.messageSuccess();
       this.enviado = true
     }else{
       this.messageErro();
     }
    },
    fornec(e){
        this.fornecedor = e
    },
    descr(e){
        this.descricao = e
    },
    preco_custo(e){
        this.precoCusto = e
    },
    preco_venda(e){
      this.precoVenda = e
    },
    limparCampos(){
       this.select = ''
    },
    messageSuccess(){
      this.success = true
      setTimeout(() =>{
        this.success = false
      }, 5000)
    },
     messageErro(){
      this.erro = true
      setTimeout(() =>{
        this.erro = false
      }, 5000)
    }

  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 1rem 0;
  .title{
    margin: 1rem 0;
    span{
      font-size: 1.5rem;
    }
  }

  text-align: center;
  form {
    border: 1px solid #4e0a43;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
    border-radius: 5px;

    input {
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 5px;
      outline: none;
      border: 1px solid #4e0a43;
      color: #4e0a43;
      font-size: 1.2rem;

      &::placeholder {
        color: #4e0a43;
      }
    }
    .btn{
      cursor: pointer;
        padding: .8rem;
        border:  1px solid rgb(86, 150, 86);
        background: none;
        color: rgb(86, 150, 86);
        transition: .2s;
        border-radius: 5px;
    &:hover{
        color: white;
        background: rgb(121, 197, 121);
        border:rgb(121, 197, 121);
    }
    }

  }
  .success{
    margin-top: .8rem;

    span{
      font-weight: 500;
      color: rgb(78, 170, 78);
    }
  }
  .error{
    margin-top: .8rem;

    span{
      font-weight: 500;
      color: rgb(213, 61, 45);
    }
  }
}

#tipoMovimentacao{
   padding: 1rem;
      margin: 1rem 0;
      border-radius: 5px;
      outline: none;
      border: 1px solid #4e0a43;
      color: #4e0a43;
      font-size: 1.2rem;

      &::placeholder {
        color: #4e0a43;
      }
}
</style>