<template>
  <div class="card">
    <span @click="click">{{ text }} <i class="fas fa-plus-circle"></i></span>
    <div class="cadastro" v-show="clicked">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
    };
  },
  props: {
    text: { type: String, required: true },
  },
  methods: {
    click() {
      this.clicked == false ? (this.clicked = true) : (this.clicked = false);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 0.4rem;
  border-radius: 5px;
  // background: #2f2f35;
  background: #303238 !important;

  span {
    cursor: pointer;
    padding: 0 .5rem;
  }
  .cadastro {
    padding: 0 0.8rem;
  }
}
</style>