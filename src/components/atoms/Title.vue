<template>
  <div class="title">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.title {
  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    color: #4e0a43;
    transition: 0.2s ease-in;
  }
}

@media screen and (max-width: 1100px) {
  .title {
    h1 {
      font-size: 2.5rem !important;
    }
  }
}
@media screen and (max-width: 900px) {
  .title {
    h1 {
      font-size: 1.8rem !important;
    }
  }
}
</style>