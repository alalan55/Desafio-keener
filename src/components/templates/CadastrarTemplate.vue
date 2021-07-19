<template>
  <div class="sign-in">
    <div class="form">
      <div class="form-content">
        <Title title="Crie a sua conta" />

        <div class="formulario">
          <!-- PODE SER UMA MOLÉCULA ESSE FORMULÁRIO -->
          <form @submit.prevent="cadastrar">
            <span v-if="!nomeValido">O seu nome precisa ter mais de 3 caracteres</span>
            <Input nome="Nome" @value="valueName" />

            <span v-if="!emailValido">Insira um E-mmail válido</span>
            <Input nome="E-mail" @value="valueEmail"/>

            <span v-if="!senhaValida">A sua senha precisa ter entre 8 e 20 caracteres, incluindo um caracter especial</span>
            <Input nome="Senha" type="password" @value="valueSenha" />

            <div class="btns">
              <button type="submit" class="cadastrar">Registrar</button>
              <router-link to="/login" class="entrar"
                >Login</router-link
              >
            </div>
          </form>
          <div class="messages">
            <span class="success" v-if="success">Usuário criado com sucesso</span>
             <span class="error" v-if="error">Ops, problemas para registrar usuário, tente novamente.</span>
          </div>
        </div>
      </div>
    </div>
    <ImgBox />
  </div>
</template>

<script>
import * as validator from '@/validators/user-validators'
import { ImgBox, Input, Title } from "@/components/atoms";
export default {
  components: {
    ImgBox,
    Input,
    Title,
  },
  data(){
    return{
      nome: '',
      email: '',
      senha: '',
      nomeValido: true,
      emailValido: true,
      senhaValida: true,
      success: false,
      error: false,
    }
  },
  methods:{
    valueName(e){
      this.nome = e
    },
    valueEmail(e){
      this.email = e
    },
    valueSenha(e){
      this.senha = e
    },
    resetValidators(){
      this.nomeValido = true;
      this.emailValido = true;
      this.senhaValida = true;
    },
   async cadastrar(){
      let person = {
        nome: this.nome,
        email: this.email,
        senha: this.senha
      }
      this.resetValidators();
      let nomeValidado = validator.nomeValido(person.nome);
      let emailValidado = validator.emailValido(person.email);
      let senhaValidada = validator.senhaValida(person.senha)

      if(nomeValidado && emailValidado && senhaValidada){
        let response = await this.$store.dispatch('cadastrar', person)
        
        response == 201 ? this.showMessageAndRedrect() : this.showMessageError()
       
      }else{
        nomeValidado ? this.nomeValido = true : this.nomeValido = false;
        emailValidado ? this.emailValido = true : this.emailValido = false;
        senhaValidada ? this.senhaValida = true : this.senhaValida = false;
      }
    },
    showMessageAndRedrect(){
      this.success = true

      setTimeout(() =>{
          this.success = false;
          this.$router.push('/login')
      }, 3500)
    },
    showMessageError(){
      this.error = true

      setTimeout(() =>{
        this.error = false
      }, 4000)
    }
  }
};
</script>

<style lang="scss" scoped>
.sign-in {
  width: 100%;
  height: 100vh;
  display: flex;

  & > div {
    flex: 1 1 300px;
  }
}

.form-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;

  .title {
    h1 {
      font-size: 3.5rem;
      font-weight: 600;
      color: #4e0a43;
      transition: 0.2s ease-in;
    }
  }
}

.formulario {
  text-align: center;
  width: 100%;
  span {
    color: #4e0a43;
  }
  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 1rem;
      margin: 1rem;
      border-radius: 5px;
      outline: none;
      border: 1px solid #4e0a43;
      color: #4e0a43;
      font-size: 1.2rem;

      &::placeholder {
        color: #4e0a43;
      }
    }
    label {
      color: #4e0a43;
    }

    .btns {
      display: flex;
      padding: 0.5rem;
      flex-wrap: wrap;

      button {
        padding: 1rem;
        width: 100%;
        margin: 0.2rem;
        border-radius: 5px;
        cursor: pointer;
        flex: 1 1 200px;
      }
      .cadastrar {
        background: #4e0a43;
        color: white;
        transition: .2s ease;
        border: none;
        &:hover{
          background: #761065;
        }
      }
      .entrar {
        background: none;
        border: 1px solid #4e0a43;
        color: #4e0a43;
      }
    }
  }
}

  .entrar {
        text-decoration: none;
        background: none;
        border: 1px solid #4e0a43;
        color: #4e0a43;
        flex: 1 1 200px;
        padding: 0.5rem;
        width: 100%;
        margin: 0.2rem;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
.success{
  color: rgb(52, 167, 52);
}
.error{
  color: rgb(199, 62, 62);
}
</style>