<template>
    <div class="movimentacoes">

        <Background>

         <Header />
        <Container>
            <BodyCardCadastro :text="text">
                <CadastroMovimentacaoTemplate />
            </BodyCardCadastro>

            <MovimentacaoListaTemplate :dados="$movimentacoes"/>
        </Container>
        </Background>



    </div>
</template>

<script>
import { Header, BodyCardCadastro } from "@/components/organisms";
import { Container,Background } from "@/components/bosons";
import { CadastroMovimentacaoTemplate, MovimentacaoListaTemplate } from "@/components/templates";
    export default {
        components:{
            Background,
            Header,
            Container,
            BodyCardCadastro,
            CadastroMovimentacaoTemplate,
            MovimentacaoListaTemplate
        },
        data(){
            return{
                text: 'Adicionar movimentação'
            }
        },
        created(){
            this.init()
        },
        methods:{
            async init(){
                await this.$store.dispatch('getMovimentacoes')
            }
        },
        computed:{
            $movimentacoes(){
                return this.$store.getters.getMovimentacoes
            }
        }
    
    }
</script>

<style lang="scss" scoped>

</style>