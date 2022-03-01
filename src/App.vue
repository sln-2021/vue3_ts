<template>
  <h2>ref的了一个作用，可以获取页面的元素</h2>
  <input type="text" ref="inputRef" />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const inputRef =ref<HTMLElement|null> (null);
    onMounted(() => {
      inputRef.value && inputRef.value.focus();
    });
    return {
      inputRef,
    };
  },
});
</script>
