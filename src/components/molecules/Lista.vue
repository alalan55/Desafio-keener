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
  // box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
  // background: rgba(255, 255, 255, 0.1);
  // overflow: hidden;
  // border-top: 1px solid rgba(255, 255, 255, 0.5);
  // border-left: 1px solid rgba(255, 255, 255, 0.5);
  // backdrop-filter: blur(5px);
  // border: 1px solid;
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
  height: 70vh;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 5px;
  
}
</style>