<template>
  <div class="sign-in">
    <div class="form">
      <div class="form-content">
        <Title title="Acesse a sua conta" />
        

        <div class="formulario">
          <!-- PODE SER UMA MOLÉCULA ESSE FORMULÁRIO -->
          <form @submit.prevent="login">
            <Input nome="E-mail" @value="valueEmail" />
            <Input nome="Senha" type="password" @value="valueSenha" />

            <div class="btns">
              <button type="submit" class="logar">Entrar</button>
              <router-link to="/register" class="entrar"
                >Cadastrar</router-link
              >
            </div>
          </form>
          <div class="autenicated" v-if="autenticado">
          <span>Usuário autencitado, redirecionando...</span>
        </div>
        
        </div>
      </div>
    </div>
    <ImgBox />
  </div>
</template>

<script>
import { ImgBox, Input, Title } from "@/components/atoms";
export default {
  components: {
    ImgBox,
    Input,
    Title,
  },
  data() {
    return {
      email: "",
      senha: "",
      autenticado: false
    };
  },
  methods: {
    valueEmail(e) {
      this.email = e;
    },
    valueSenha(e) {
      this.senha = e;
    },
    async login() {
      let person = {
        email: this.email,
        senha: this.senha,
      };
     let response = await this.$store.dispatch("login", person);
     if(response == 200){
       this.autenticado = true

       setTimeout(() =>{
         this.autenticado = false
         this.$router.push('/')
       }, 3000)
     }
     
    },
  },
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
      .logar {
        background: #4e0a43;
        color: white;
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
    }
  }
}
.autenicated{
  border: 1px solid;
  background: rgb(42, 170, 42);
  padding: .5rem;
  border-radius: 5px;
  width: 90%;
  margin:  .2rem auto;
  span{
    color: white;
  }
}
</style>