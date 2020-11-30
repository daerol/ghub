<template>
    <div>
    <b-row align-h="center">
    <b-col cols="4"><h1>Github Username</h1></b-col>
  </b-row>

  <b-row align-h="center">
    <b-col cols="4">
      <b-form inline @submit.prevent="search">

        <label class="sr-only" for="inline-form-input-username">Username</label>
        <b-input-group prepend="@" class="mb-2 mr-sm-2">
          <b-form-input 
          id="inline-form-input-username" 
          placeholder="Username"
          v-model="searchText"
          
          ></b-form-input>
        </b-input-group>

      <b-button type="submit" class="btn btn-primary mb-2">Search</b-button>
    
      </b-form>

      </b-col>
  </b-row>

    </div>
</template>

<script>
export default {
    methods: {
      search() {
        this.$store.dispatch("search", {text: this.searchText})
      }
    },
    data() {
      return {
        searchText: ''
      };
    },
}
</script>

