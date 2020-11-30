import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repo: [],
    display_repo: [],
    rows: 0
  },
  mutations: {
    SET_REPO(state, repo) {
      state.repo = repo;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAYREPOS(state, display_repo) {
      state.display_repo = display_repo;
    }
  },
  actions: {

    fetchData() {
      return new Promise(resolve => {
        setTimeout(async ()=> {
          const res = await fetch("https://api.github.com/users/daerol/repos");
          const val = await res.json();
          resolve(val);
        }, 300);
      });
    },
    async fetchRepo({dispatch, commit}) {
      const myJson = await dispatch("fetchData")
      commit("SET_REPO", myJson);
      const displayrepos = myJson.slice(0, 5);
      commit("SET_DISPLAYREPOS", displayrepos)
      commit("SET_ROWS", myJson.length)
    },

    async paginate({commit, state}, {currentPage, perPage}) {
      console.log(currentPage)
      const start = (currentPage - 1) * perPage;
      const repo = state.repo.slice(start, start + 5);
      commit("SET_DISPLAYREPOS", repo)
    },

  }, 
  getters: {
    repo(state) {
      return state.repo
    },
    rows(state) {
      return state.rows
    },
    displayrepo(state) {
      return state.display_repo
    }
  },
  modules: {}
});
