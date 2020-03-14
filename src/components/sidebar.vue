<template>
  <div class="sidebar">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <router-link to="Signin">
              <span>・ログイン</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/">
              <span>・ログアウト</span>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.sidebar {
  height: 100%;
  width: 450px;
  max-width: 1024px;
  position: fixed;
  z-index: 1;
  left: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}
</style>