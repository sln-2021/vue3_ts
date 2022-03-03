<template>
  <h2>provide和inject（跨层级间通信）</h2>
  <h3>color:{{ color }}</h3>

  <button @click="color = 'green'">green</button>
  <button @click="color = 'yellow'">yellow</button>
  <button @click="color = 'blue'">blue</button>
  <hr />
  <Son />
</template>
<script lang="ts">
import { defineComponent, ref, provide } from 'vue';
import Son from './components/Son.vue';
export default defineComponent({
  name: 'App',
  components: { Son },
  setup() {
    const color = ref('red');
    // 提供数据
    provide('color', color);
    return {
      color,
    };
  },
});
</script>
