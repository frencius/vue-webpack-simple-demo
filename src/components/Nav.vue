<template>
  <div id="nav">
    <el-row>
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>Main Menu</template>
            <el-menu-item-group title="Pesanan">
              <el-menu-item index="1-1"><a href="/"> Baru </a></el-menu-item>
              <el-menu-item index="1-2"><v-link href="/">Konfirmasi</v-link></el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Sales">
              <el-menu-item index="1-3"><v-link href="/sales">List Sales</v-link></el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">Kios</template>
              <el-menu-item index="1-4-1">Top Up</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>Account</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>Setting</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VLink from './Vlink.vue'


  export default {
    components: {
      VLink
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>