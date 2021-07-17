<template>
    <router-link :to="to">{{name}}</router-link>
</template>

<script>
    export default {
        props:{
            to:{type: String, required: true},
            name: {type: String, required: true}
        }
    }
</script>

<style lang="scss" scoped>


</style>