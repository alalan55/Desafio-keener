<template>
  <section>
    <div class="title">
      <span>Insira as informações abaixo sobre o produto</span>
    </div>
    <form @submit.prevent="cadastrar">

      <span v-if="!nomeValido" class="warning">Nome precisa conter o mínimo de 2 caracteres.</span>
      <Input type="string" nome="Nome" @value="nome" :enviado="enviado" />

      <span v-if="!precoValido" class="warning" >O preço precisa ser maior que R$0,00.</span>
      <Input type="number" nome="Preço" @value="preco" :enviado="enviado" />

      <span v-if="!quantidadeValida" class="warning">A quantidade precisa ser maior que 0.</span>
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
import * as validator from '@/validators/produtos-validators'
export default {
    data(){
        return{
            name: '',
            price: '',
            qtd: '',
            enviado: false,
            erro: false,
            success: false,
            step: '.01',
            messageProduto : 'Ops, algum campo não foi  preenchido corretamente',
            nomeValido: true,
            precoValido: true,
            quantidadeValida: true
        }
    },
  components: {
    Input,
  },
  methods: {
    resetValidators(){
      this.nomeValido = true;
      this.precoValido = true;
      this.quantidadeValida = true;
    },
    resetCamposLocais(){
      this.name = '';
      this.price = '';
      this.qtd = ''
    },
    async cadastrar() {

      this.resetValidators()
      let produto = {
          nome: this.name,
          preco: this.price,
          quantidade: this.qtd
      }

      let nomeValidado = validator.nomeValido(produto.nome);
      let quantidadeValidada = validator.quantidadeValida(produto.quantidade)
      let precoValidado = validator.precoValido(produto.preco)

      if(nomeValidado && quantidadeValidada && precoValidado ){
        let response = await this.$store.dispatch('cadastrarProduto', produto)
        response == 201 ? this.messageSuccess() : this.messageErro();
        console.log('nome', this.name)
      }else{
        nomeValidado ? this.nomeValido = true : this.nomeValido = false;
        quantidadeValidada ? this.quantidadeValida = true : this.quantidadeValida = false;
        precoValidado ? this.precoValido = true :this.precoValido = false;
      }

    },
    nome(e){
      console.log(e)
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
         this.enviado = true
         this.resetCamposLocais()
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
.warning{
  color: rgb(221, 221, 41);
}
</style>