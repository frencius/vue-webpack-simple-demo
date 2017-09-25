<template>
  <div id="master">
    <app-header></app-header>    
     <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="6">
        <app-nav></app-nav>
      </el-col>
      <el-col :xs="16" :sm="18" :md="20" :lg="18">
        <slot></slot>
      </el-col>
    </el-row>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from '../Header.vue';
  import Nav from '../Nav.vue';
  import Footer from '../Footer.vue';

  export default {
    components : {
      'app-header': Header,
      'app-footer': Footer,
      'app-nav' : Nav
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
