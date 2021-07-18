<template>
     <input :type="type" :step="step" :placeholder="nome" v-model="valor" @change="$emit('value', $event.target.value)">
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
            enviado: {type: Boolean},
            step:{type: String, default: 'any'}
        },
        methods:{
            sendargs(e){
                if(e.Key == 'ENTER'){
                    this.$emit('valInput', this.valor)
                }
            }
        },
        watch:{
          enviado(novo, antigo){
              this.oldValue = antigo
              console.log('valor antigo',antigo,'valor novo',novo)
              
                if(novo == true){
                    this.valor = ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  
</style>