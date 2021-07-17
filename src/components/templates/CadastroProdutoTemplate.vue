<template>
  <section>
    <div class="title">
      <span>Insira as informações abaixo sobre o produto</span>
    </div>
    <form @submit.prevent="cadastrar">
      <Input type="string" nome="Nome" @value="nome" :enviado="enviado" />
      <Input type="number" nome="Preço" @value="preco" :enviado="enviado" />
      <Input type="number" nome="Quantidade" @value="quantidade" :enviado="enviado" :step="step" />
      <button type="submit" class="btn">Cadastrar produto</button>
    </form>
      <div class="success" v-if="success">
      <span>Produto inserido com sucesso</span>
    </div>
    <div class="error" v-if="erro">
      <span>Ops, ocorreu algum erro para cadastrar o produto</span>
    </div>
  </section>
</template>

<script>
import { Input } from "@/components/atoms";
export default {
    data(){
        return{
            name: '',
            price: '',
            qtd: '',
            enviado: false,
            erro: false,
            success: false,
            step: '.01'
        }
    },
  components: {
    Input,
  },
  methods: {
    async cadastrar() {
      let produto ={
          nome: this.name,
          preco: this.price,
          quantidade: this.qtd
      }
      let response = await this.$store.dispatch('cadastrarProduto', produto)

      if(response == 201){
        this.enviado = true;
        this.messageSuccess();
      }else{
        this.messageErro();
      }
    },
    nome(e){
        this.name = e
    },
    preco(e){
        this.price = e
    },
    quantidade(e){
        this.qtd = e
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
  // background:#303238;
  padding: .1rem;
  border-radius: 5px;
  .title{
    margin: 1rem 0;
    span{
      font-size: 1.5rem;
    }
  }

  text-align: center;
  form {
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
      color: white;
      font-size: 1.2rem;
      background: #141419;
      border: none;



      &::placeholder {
        color: white;
      }
    }
     .btn{
      cursor: pointer;
        padding: .8rem;
        background: rgb(86, 150, 86);
        color: white;
        transition: .2s;
        border-radius: 5px;
        border: none;
    &:hover{
        color: white;
        background: rgb(109, 170, 109);
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
</style>