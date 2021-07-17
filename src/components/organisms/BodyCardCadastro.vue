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
  box-shadow:  20px 20px 50px rgba(0,0,0,0.2);
  background: rgba(255,255,255,0.1);
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.5);
  border-left: 1px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(5px);

  span {
    cursor: pointer;
  }
}
</style>