<template>
  <div id="app">
    <app-header></app-header>
    <app-navigation></app-navigation>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Navigation from './components/Navigation-menu.vue';
  import Table from './components/Table.vue';
  
  export default {
    components : {
      'app-header': Header,
      'app-footer': Footer,
      'app-navigation' : Navigation,
      'table-data' : Table
    },
    data () {
      return {
        title: 'KONTEN'
      }
    }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
