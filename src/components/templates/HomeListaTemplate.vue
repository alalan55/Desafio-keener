<template>
  <div>
    <Lista :text="text">
      <div v-if="dados">
      <ListItem
        v-for="data in dados"
        :key="data.id"
        :id="data.id_produto"
        :name="data.nome"
        :preco="data.preco"
        :quantidade="data.quantidade"
      />
      </div>
      <div v-else class="no-produtos">
        <span>Ops, parece que nenhum produto foi encontrado.</span>
      </div>
    </Lista>
  </div>
</template>

<script>
import { Lista } from "@/components/molecules";
import { ListItem } from "@/components/atoms";
export default {
  data() {
    return {
      text: "Produtos cadastrados no sistema",
    };
  },
  props: {
    dados: { type: Object, required: true },
  },
  components: {
    Lista,
    ListItem,
  },
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