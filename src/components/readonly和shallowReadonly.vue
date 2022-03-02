<template>
  <h2>readonly和shallowReadonly</h2>
  <h3>state:{{ state2 }}</h3>
  <button @click="update">update</button>
</template>
<script>
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      name: 'lll',
      age: 19,
      car: {
        name: '奔驰',
        color: 'red',
      },
    });
    // readonly====深度只读，不能修改
    // const state2 = readonly(state)
    // shallowReadonly====浅度只读，不能修改第一层对象的值，可以修改第二层的对象的值
    

    const state2 = shallowReadonly(state)
    const update = () => {
      state2.name+='==='
      state2.car.name+='==='
      console.log('ceshi ');
    };
    return {
      state,
      state2,
      update,
    };
  },
});
</script>
