<template>
    <!-- <input type="text" :placeholder="nome" v-model="valor" @keypress="sendargs"> -->
     <input :type="type" :placeholder="nome" v-model="valor" @change="$emit('value', $event.target.value)">
</template>

<script>
    export default {
        data(){
            return{
                valor: '',
                oldValue: null
            }
        },
        props:{
            nome: {type: String, required: true},
            type:{ type: String, default: 'text'},
            enviado: {type: Boolean}
        },
        methods:{
            sendargs(e){
                if(e.Key == 'ENTER'){
                    this.$emit('valInput', this.valor)
                }
            },
            apagaCampo(){
                if(this.enviado){
                    this.valor = ''
                    
                }
            }
        },
        watch:{
          enviado(novo, antigo){
              this.oldValue = antigo
              
                if(novo == true){
                    this.valor = ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>