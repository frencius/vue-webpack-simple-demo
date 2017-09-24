<template>
  <div id="content">
    <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="6">
        <app-nav></app-nav>
      </el-col>
      <el-col :xs="16" :sm="18" :md="20" :lg="18">
        <app-show></app-show>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  import Nav from './Nav.vue';
  import Show from './Show.vue';

  export default {
    components : {
      'app-nav' : Nav,
      'app-show' : Show
    }
  }
</script>