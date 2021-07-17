<script>
export default {
   async created(){
       await this.$store.dispatch('destroyToken')

       this.$router.push('/logar')
    }
}
</script>