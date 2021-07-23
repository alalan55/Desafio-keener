<template>
  <div>
    <Lista :text="text">
      <div v-if="dados">
      <ListItemMovimentacao 
        v-for="data in dados"
        :key="data.id_movimentacao"
        :fornecedor="data.fornecedor"
        :descricao="data.descricao"
        :movimentacao="data.tipo_movimentacao"
        :nome="data.nome"
        :preco="data.preco"
        :quantidade="data.quantidade"
      />
      </div>
      <div v-else class="no-produtos">
        <span>Ops, nenhuma movimentação foi encontrada.</span>

      </div>
    </Lista>
  </div>
</template>

<script>
import { Lista } from "@/components/molecules";
import { ListItemMovimentacao } from "@/components/atoms";
export default {
  data() {
    return {
      text: "Movimentações do sistema",
      oldValue: null,
      atualizar: false
    };
  },
  props: {
    dados: { type: Object, required: true },
  },
  components: {
    Lista,
    ListItemMovimentacao,
  }
};
</script>
<style lang="scss" scoped>
.no-produtos{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  span{
    font-weight: 500;
    font-size: 1.3rem;
  }
}
</style>