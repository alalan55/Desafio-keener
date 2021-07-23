<template>
  <li>
    <div class="elements">
      <div class="nome item">
        <span class="title">Fornecedor</span>
        <span>{{ fornecedor }}</span>
      </div>

      <div class="descricao item">
        <span class="title">Descrição</span>
        <span>{{ descricao }}</span>
      </div>

      <div>
        <span class="title">Produto</span>
        <span>{{ nome }}</span>
      </div>
      <div>
        <span class="title">Preço unitário</span>
        <span>{{ $preco }}</span>
      </div>
      <div>
        <span class="title">Quantidade</span>
        <span>{{ quantidade }}</span>
      </div>
      <div>
        <span class="title">Valor total</span>
        <span>{{  $total }}</span>
      </div>
      
    </div>
    <div class="tipo_movimentacao">
      <span
        class="texto_movimentacao"
        :class="{ entrada: $movimentacaoEstilo, saida: !$movimentacaoEstilo }"
        >{{ $movimentacao }}</span
      >
    </div>
  </li>
</template>

<script>
export default {
  props: [
    "fornecedor",
    "descricao",
    "movimentacao",
    "quantidade",
    "preco",
    "nome",
  ],
  computed: {
    $movimentacao() {
      return this.movimentacao == 0 ? "Entrada" : "Saída";
    },
    $movimentacaoEstilo() {
      return this.movimentacao == 0 ? true : false;
    },
    $preco() {
      return this.preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    $total(){
      let total = this.preco * this.quantidade
      return total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  display: flex;
  margin: 0.5rem 0;
  border-radius: 5px;
  padding: 0.5rem;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #1b1b21;

  & > div {
    flex: 1 1 300px;
  }

  .elements > div {
    display: flex;
    flex-direction: column;
    margin: 1rem 0.2rem;

    .title {
      font-size: 0.7rem;
      font-weight: 800;
      color: rgb(150, 188, 228);
    }
  }
  .tipo_movimentacao {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    .texto_movimentacao {
      padding: 0.1rem;
      border-radius: 5px;
    }
    .entrada {
      background: rgb(51, 184, 51);
      color: white;
    }
    .saida {
      background: rgb(202, 69, 69);
      color: white;
    }
  }
}
</style>