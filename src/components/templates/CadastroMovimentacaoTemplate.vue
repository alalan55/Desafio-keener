<template>
  <section>
    <div class="title">
      <span>Insira as informações sober a movimentação</span>
    </div>
    <form @submit.prevent="cadastrar">
      <span v-if="!fornecedorValido" class="warning">Fornecedor deve ter entre 2 e 50 caracters</span>
      <Input
        type="string"
        nome="Fornecedor"
        @value="fornec"
        :enviado="enviado"
      />
      <span v-if="!descricaoValidada" class="warning">A descriçao deve conter entre 2 e 100 caractéres</span>
      <Input type="string" 
        nome="Descrição" 
        @value="descr" 
        :enviado="enviado" 
      />

      <span v-if="!tipoMovimentacaoValidado" class="warning">Selecione uma das opções abaixo</span>
      <select name="tipoMovimentacao" id="tipoMovimentacao" v-model="select">
        <option disabled value="">Tipo de movimentação</option>
        <option value="0">Entrada</option>
        <option value="1">Saída</option>
      </select>

      <span v-if="!quantidadeValidada" class="warning">Quantidade precisa ser maior que 0</span>
      <Input
        type="number"
        nome="Quantidade"
        @value="quantidade"
        :enviado="enviado"
      />

      <Input
        type="number"
        nome="Id do produto"
        @value="id_do_produto"
        :enviado="enviado"
      />
      <button type="submit" class="btn">Registrar movimentação</button>
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
import * as validator from "@/validators/movimentacoes-validators";
import { Input } from "@/components/atoms";
export default {
  data() {
    return {
      fornecedor: '',
      descricao: '',
      qtd: 0,
      id_prod: '',
      select: '',
      success: false,
      erro: false,
      enviado: false,
      fornecedorValido: true,
      descricaoValidada: true,
      tipoMovimentacaoValidado: true,
      quantidadeValidada: true
    };
  },
  components: {
    Input,
  },
  methods: {
    resetValidators(){
      this.fornecedorValido = true;
      this.descricaoValidada = true;
      this.precoCustoValidado = true;
      this.precoVendaValidado = true;
      this.tipoMovimentacaoValidado = true
      
    },
    resetCamposLocais(){
      this.fornecedor = '';
      this.descricao  = '';
      this.precoCusto = 0;
      this.precoVenda = 0;
      this.select = ''
    },
    async cadastrar() {
      

      this.resetValidators();

      let movimentacao = {
        fornecedor: this.fornecedor,
        descricao: this.descricao,
       quantidade: +this.qtd,
       id_produto: +this.id_prod,
        tipo_movimentacao: +this.select,
      };

      let fornecedorValidado = validator.fornecedor(movimentacao.fornecedor);
      let descricaoValida = validator.descricao(movimentacao.descricao);
      let tipoMovimentacaoValida = validator.tipoMovimentacao(movimentacao.tipo_movimentacao);
      let quantidadeValida = validator.quantidade(movimentacao.quantidade)

      if (fornecedorValidado && descricaoValida && tipoMovimentacaoValida && quantidadeValida) {
        
       let response = await this.$store.dispatch("cadastrarMovimentacao",movimentacao);
       response == 201 ? this.messageSuccess() : this.messageErro();
      } else {
        fornecedorValidado
          ? (this.fornecedorValido = true)
          : (this.fornecedorValido = false);
        descricaoValida
          ? (this.descricaoValidada = true)
          : (this.descricaoValidada = false);
        tipoMovimentacaoValida
          ? (this.tipoMovimentacaoValidado = true)
          : (this.tipoMovimentacaoValidado = false);
        quantidadeValida
          ? (this.quantidadeValidada = true)
          : (this.quantidadeValidada = false);
      }
    },
    fornec(e) {
      this.fornecedor = e;
    },
    descr(e) {
      this.descricao = e;
    },
    quantidade(e) {
      this.qtd = e;
    },
    id_do_produto(e) {
      this.id_prod = e;
    },
    limparCampos() {
      this.select = "";
    },
     atualizarLista(){
       this.$emit('atualizarLista', true)
    },
   async messageSuccess() {
      this.success = true;
      this.limparCampos();
      this.atualizarLista();
      setTimeout(() => {
        this.success = false;
        this.resetCamposLocais();
        this.enviado = true;
      }, 5000);
    },
    messageErro() {
      this.erro = true;
      setTimeout(() => {
        this.erro = false;
      }, 5000);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 1rem 0;
  .title {
    margin: 1rem 0;
    span {
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

    input,
    select {
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
    .btn {
      cursor: pointer;
      padding: 0.8rem;
      background: rgb(86, 150, 86);
      color: white;
      transition: 0.2s;
      border-radius: 5px;
      border: none;
      &:hover {
        color: white;
        background: rgb(109, 170, 109);
      }
    }
  }
  .success {
    margin-top: 0.8rem;

    span {
      font-weight: 500;
      color: rgb(78, 170, 78);
    }
  }
  .error {
    margin-top: 0.8rem;

    span {
      font-weight: 500;
      color: rgb(213, 61, 45);
    }
  }
}
.warning{
  color: rgb(221, 221, 41);
}
</style>