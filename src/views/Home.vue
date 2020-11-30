<template>
  <div class="home">
    <b-container>
      <githubForm></githubForm>
      <repoM v-for="repo in displayrepo" v-bind:key="repo.id" v-bind:name="repo.name"></repoM>
       <b-row align-h="center">
          <b-col cols="4" class="mt-3 mx-auto"> 
            <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            @input="paginate(currentPage)"
          ></b-pagination>
          </b-col>
       </b-row>
  </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import UsernameForm from '@/components/UsernameForm.vue'
import RepoM from '@/components/repo.vue'
import {mapGetters} from "vuex"



export default {
  name: "Home",
  components: { 'githubForm' : UsernameForm, 'repoM': RepoM  },
  computed: {
    ...mapGetters(['repo', 'displayrepo','rows'])
  },
  
    mounted(){
    this.fetchData();
    },
    data() {
      return {
       currentPage: 1, perPage: 5,
      }
    },
  methods: {
    async fetchData(){
      await this.$store.dispatch("fetchRepo");
      console.log(this.$store.getters.displayrepo)
    },

  paginate(currentPage) {
    this.$store.dispatch("paginate", {currentPage, perPage: this.perPage})
  },

  }
};
</script>
