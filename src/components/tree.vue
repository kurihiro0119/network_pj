<template>
  <div class="tree">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "Level one 1",
          children: [
            {
              label: "Level two 1-1",
              children: [
                {
                  label: "Level three 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "Level one 2",
          children: [
            {
              label: "Level two 2-1",
              children: [
                {
                  label: "Level three 2-1-1"
                }
              ]
            },
            {
              label: "Level two 2-2",
              children: [
                {
                  label: "Level three 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "Level one 3",
          children: [
            {
              label: "Level two 3-1",
              children: [
                {
                  label: "Level three 3-1-1"
                }
              ]
            },
            {
              label: "Level two 3-2",
              children: [
                {
                  label: "Level three 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>

<style>
.tree {
  height: 100%;
  width: 300px;
  max-width: 1024px;
  position: fixed;
  z-index: 1;
  left: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}
</style>