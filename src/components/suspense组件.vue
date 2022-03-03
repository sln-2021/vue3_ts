<template>
  <h2>suspense组件</h2>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template v-slot:fallback>
      <h2 style="color: 'red'">loading</h2>
    </template>
  </Suspense>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
// vue2动态引入组件的写法 在vue3中不行
// const AsyncComponent = () => import('./components/AsyncComponents.vue');
// vue3中动态引入组件
// const AsyncComponent = defineAsyncComponent(() => import('./components/AsyncComponents.vue'));
import AsyncComponent from './components/AsyncComponents.vue';
export default defineComponent({
  name: 'App',
  components: { AsyncComponent },
});
</script>
