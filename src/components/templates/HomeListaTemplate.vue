<template>
  <div>
    <Lista :text="text">
      <ListItem
        v-for="data in dados"
        :key="data.id"
        :name="data.nome"
        :preco="data.preco"
        :quantidade="data.quantidade"
      />
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