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

      <span v-if="!precoCustoValidado" class="warning">Informe um valor válido</span>
      <Input
        type="number"
        nome="Preço de custo"
        @value="preco_custo"
        :enviado="enviado"
      />

      <span v-if="!precoVendaValidado" class="warning">Informe um valor válido</span>
      <Input
        type="number"
        nome="Preço de venda"
        @value="preco_venda"
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
      precoCusto: 0,
      precoVenda: 0,
      select: '',
      success: false,
      erro: false,
      enviado: false,
      fornecedorValido: true,
      descricaoValidada: true,
      precoCustoValidado: true,
      precoVendaValidado: true,
      tipoMovimentacaoValidado: true,
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
        preco_custo: this.precoCusto,
        preco_venda: this.precoVenda,
        tipo_movimentacao: +this.select,
      };

      let fornecedorValidado = validator.fornecedor(movimentacao.fornecedor);
      let descricaoValida = validator.descricao(movimentacao.descricao);
      let precoCustoValido = validator.precoCusto(movimentacao.preco_custo);
      let precoVendaValida = validator.precoVenda(movimentacao.preco_venda);
      let tipoMovimentacaoValida = validator.tipoMovimentacao(movimentacao.tipo_movimentacao);

      if (
        fornecedorValidado &&
        descricaoValida &&
        precoCustoValido &&
        precoVendaValida &&
        tipoMovimentacaoValida
      ) {
        let response = await this.$store.dispatch(
          "cadastrarMovimentacao",
          movimentacao
        );
        response == 201 ? this.messageSuccess() : this.messageErro();
      } else {
        fornecedorValidado
          ? (this.fornecedorValido = true)
          : (this.fornecedorValido = false);
        descricaoValida
          ? (this.descricaoValidada = true)
          : (this.descricaoValidada = false);
        precoCustoValido
          ? (this.precoCustoValidado = true)
          : (this.precoCustoValidado = false);
        precoVendaValida
          ? (this.precoVendaValidado = true)
          : (this.precoVendaValidado = false);
        tipoMovimentacaoValida
          ? (this.tipoMovimentacaoValidado = true)
          : (this.tipoMovimentacaoValidado = false);
      }
    },
    fornec(e) {
      this.fornecedor = e;
    },
    descr(e) {
      this.descricao = e;
    },
    preco_custo(e) {
      this.precoCusto = e;
    },
    preco_venda(e) {
      this.precoVenda = e;
    },
    limparCampos() {
      this.select = "";
    },
    messageSuccess() {
      this.success = true;
      this.limparCampos();
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
</style>