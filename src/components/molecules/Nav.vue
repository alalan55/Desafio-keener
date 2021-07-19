<template>
  <nav>
    <div class="logo">&STOCK</div>
    <div class="elementos__direito">
      <NavLink to="/" name="Home" class="link" />
      <NavLink to="/movimentacoes" name="Movimentações" class="link" />
      <div class="name-logout">
        <span>Seja bem-vindo {{ nome }}</span>
        <NavLink to="/" name="logout" @click="logout" class="logout" />
      </div>
    </div>
    <i class="fas fa-bars" @click="openOrClose"></i>
  </nav>
</template>

<script>
import { NavLink } from "@/components/atoms";
export default {
  components: {
    NavLink,
  },
  data() {
    return {
      clicado: false,
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("destroyToken");

      this.$router.push("/login");
    },
    openOrClose() {
      let ladoDireito = document.querySelector(".elementos__direito");
      this.clicado ? (this.clicado = false) : (this.clicado = true);

      this.clicado
        ? (ladoDireito.style.left = "0")
        : (ladoDireito.style.left = "-100%");
    },
  },
  computed: {
    nome() {
      return this.$store.getters.firstName;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;

  .elementos__direito {
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      margin-left: 1rem;
    }
    a {
      color: white !important;
    }

    .name-logout {
      display: flex;
      flex-direction: column;
      .logout {
        text-decoration: none;
        padding: 0.2rem;
        border: 1px solid black;
        border-radius: 8px;
        display: flex;
        align-items: center;
        color: black;
        justify-content: center;
        transition: 0.2s;

        &:hover {
          color: white;
          background: black;
        }
      }
    }
    .link {
      text-decoration: none;
      color: black;
      margin-left: 1.5rem;
    }
  }
  .fa-bars {
    display: none;
    color: white !important;
  }
}

@media screen and(max-width:460px) {
  nav {
    padding: 0.8rem;
    .elementos__direito {
      position: fixed;
      width: 80%;
      height: 100%;
      background: rgba(#000000, 0.9);
      backdrop-filter: blur(3px);
      left: -100%;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.5s;

      a {
        color: white !important;
        margin: 2rem 0;
      }

      .name-logout {
        border: 1px solid white !important;
        padding: 0.5rem !important;
        border-radius: 5px;

        .logout {
          border: 1px solid white !important;
          &:hover {
            background: white !important;
            color: black !important;
          }
        }
      }
    }
  }
  .fa-bars {
    display: block !important;
    color: black !important;
    z-index: 2;
    cursor: pointer;
  }
  .logo {
    color: white !important;
    z-index: 2;
    font-weight: 800;
  }
}
</style>