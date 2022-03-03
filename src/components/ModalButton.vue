<template>
  <h2>ModalButton</h2>
  <button @click="modalOpen = true">打开对话框</button>
  <Teleport to="body">
    <div v-if="modalOpen">
      这是对话框
      <button @click="modalOpen = false">关闭对话框</button>
    </div>
  </Teleport>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const modalOpen = ref(false);
    return {
      modalOpen,
    };
  },
});
</script>
