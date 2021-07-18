<template>
  <div class="card-lista">
    <h3>{{ text }}</h3>
    <ul>
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.card-lista {
  margin-top: 1.5rem;
  border-radius: 5px;
  padding: 0.2rem;
   background:#303238 !important;
   h3{
     margin: .5rem 1rem;
   }
}
ul {
  margin: 0.5rem 0;
  padding: 1rem;
  height: 75vh;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 5px;
  
}
</style>