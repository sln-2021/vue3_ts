<template>
  <h2>响应式数据的判断</h2>
  <h3>isRef:{{ is1 }}</h3>
  <h3>isReactive:{{ is2 }}</h3>
  <h3>isReadonly:{{ is3 }}</h3>
</template>
<script lang="ts">
import { defineComponent, isRef, ref, reactive, isReactive, isReadonly, readonly } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const obj = ref({
      name: 'lll',
      age: 18,
    });
    const obj1 = reactive({
      name: 'lll',
      age: 18,
    });

    const is1 = isRef(obj);
    const is2 = isReactive(obj1);
    const is3 = isReadonly(readonly({}));
    return { is1, is2, is3 };
  },
});
</script>
