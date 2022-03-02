<template>
  <h2>toRefs的使用</h2>
  <h3>姓名: {{ name }}</h3>
  <h3>年龄:{{ age }}</h3>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      name: 'lll',
      age: 33,
    });
    const states = toRefs(state);
    // toRefs可以把把一个响应式对象转换城普通对象，该普通对象的每一个property都是一个ref
    const { name, age } = toRefs(state);
    setInterval(() => {
      name.value += '=====';
      console.log('====');
    }, 1000);
    return {
      // ...states,
      name,
      age,
    };
  },
});
</script>
