<template>
  <!-- <h2>GrandSon孙子组件</h2> -->
  <h2 :style="{color}">GrandSon孙子组件</h2>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
export default defineComponent({
  name: 'GrandSon',
  setup() {
    // 注入数据
    const color = inject('color');
    return {
      color,
    };
  },
});
</script>
