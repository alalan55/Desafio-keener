<template>
  <div class="home">
    <Background>

    <Header />

    <Container>

      <BodyCardCadastro :text="text">
        <CadastroProdutoTemplate />
      </BodyCardCadastro>
      
      <HomeListaTemplate class="lista" :dados="$produtos" />

    </Container>
    </Background>
  </div>
</template>

<script>
import { Header, BodyCardCadastro } from "@/components/organisms";
import { CadastroProdutoTemplate, HomeListaTemplate } from "@/components/templates";
import { Container,Background } from "@/components/bosons";

export default {
  name: "Home",
  components: {
    Background,
    Header,
    CadastroProdutoTemplate,
    Container,
    BodyCardCadastro,
    HomeListaTemplate,
  },
  data() {
    return {
      clicked: false,
      text: 'Adicionar novo produto'
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      await this.$store.dispatch("getProdutos");
    },
  },
  computed: {
    $produtos() {
      return this.$store.getters.getProdutos;
    },
  },
};
</script>
