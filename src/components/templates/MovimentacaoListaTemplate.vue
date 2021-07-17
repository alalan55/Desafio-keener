<template>
  <div>
    <Lista :text="text">
      <ListItemMovimentacao 
        v-for="data in dados"
        :key="data.id_movimentacao"
        :fornecedor="data.fornecedor"
        :descricao="data.descricao"
        :preco_custo="data.preco_custo"
        :preco_venda="data.preco_venda"
        :movimentacao="data.tipo_movimentacao"

      />
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
    };
  },
  props: {
    dados: { type: Object, required: true },
  },
  components: {
    Lista,
    ListItemMovimentacao,
  },
};
</script>