import { createStore } from "vuex";

export default createStore({
  state: {
    token: localStorage.getItem('access-token') || null,
    nameUser: localStorage.getItem('nome-user') || '',
    produtos: [],
    movimentacoes: []
  },
  mutations: {
    RETORNAR_TOKEN(state, token) {
      state.token = token
    },
    DESTROI_TOKEN(state) {
      state.token = null
    },
    NOME_USUARIO(state, nome) {
      state.nameUser = nome
    },
    ADICIONA_PRODUTO(state, produto) {
      state.produtos.unshift(produto)
    },
    GET_PRODUTOS(state, produtos) {
      state.produtos = produtos
    },
    GET_MOVIMENTACOES(state, movimentacoes){
      state.movimentacoes = movimentacoes
    },
    CADASTRAR_MOVIMENTACAO(state, movimentacao){
      state.movimentacoes.unshift(movimentacao)
    }
  },
  actions: {
    async cadastrar(context, usuario) {

      var options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      }

      try {

        let req = await fetch(process.env.VUE_APP_ROUTE + '/usuarios/cadastro', options)
        let res = await req.json()
        return res.status

      } catch (error) {
         console.error(error)
         throw error;
      }
    },
    async login(context, usuario) {
      var options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      }

      try {

        let req = await fetch(process.env.VUE_APP_ROUTE + '/usuarios/login', options)
        let res = await req.json()
        const token = res.token

        localStorage.setItem('access-token', token)
        localStorage.setItem('nome-user', res.nome)
        context.commit('RETORNAR_TOKEN', token)
        context.commit('NOME_USUARIO', res.nome)
        return res.status

      } catch (error) {
        console.error(error)
        return error
      }
    },
    async cadastrarProduto(context, produto) {

      var options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${context.state.token}`
        },
        body: JSON.stringify(produto)
      }

      try {
        let req = await fetch(process.env.VUE_APP_ROUTE + '/produtos', options);
        let res = await req.json();

        return res.status
      } catch (error) {
        console.error(error)
      }
    },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem('access-token')
        localStorage.removeItem('nome-user')
        context.commit('DESTROI_TOKEN')
      }
    },
    async getProdutos(context) {
      try {
        let req = await fetch(process.env.VUE_APP_ROUTE  + '/produtos')
        let res = await req.json()
        if (res.status == 200) {
          context.commit('GET_PRODUTOS', res.response)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async getMovimentacoes(context){
     
      try{
        let req = await fetch(process.env.VUE_APP_ROUTE  + '/movimentacao');
        let res = await req.json();

        if(res.status == 200){
          context.commit('GET_MOVIMENTACOES', res.response)
        }

      }catch (error){
        console.error(error)
      }

  
    },
    async cadastrarMovimentacao(context, movimentacao){

      var options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${context.state.token}`
        },
        body: JSON.stringify(movimentacao)
      }
      try {
        
        let req = await fetch(process.env.VUE_APP_ROUTE  + '/movimentacao', options)
        let res = await req.json()
        return res.status

      } catch (error) {
        console.error(error)
      }

    }
  },
  getters: {
    loggedIn(state) {
      return state.token != null
    },
    firstName(state) {
      let name = state.nameUser;
      let nameArray = name.split(' ');
      let firstName = nameArray[0]

      return firstName
    },
    getProdutos(state) {
      return state.produtos
    },
    getMovimentacoes(state){
       let formatedMovimentacoes = state.movimentacoes.sort((a,b) =>{
        return a.fornecedor < b.fornecedor ? -1 : a.fornecedor > b.fornecedor ? 1 : 0
      })
      return formatedMovimentacoes
    }
  }
});
