<template>
    <div class="background">
        <slot/>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.background{
    background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)100%), url(https://images.pexels.com/photos/6387873/pexels-photo-6387873.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260) no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
}

</style>