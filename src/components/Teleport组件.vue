<template>
  <h2>teleport组件的使用</h2>
  <ModalButton />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ModalButton from './components/ModalButton.vue';

export default defineComponent({
  name: 'App',
  components: { ModalButton },
  setup() {
    return {};
  },
});
</script>
