<template>
  <h2>toRef的使用</h2>
  <h3>state: {{ state }}</h3>
  <h3>age:{{ age }}</h3>
  <h3>money:{{ money }}</h3>
  <hr />
  <button @click="update">update</button>
  <Child :age="age"/>
</template>
<script lang="ts">
import { defineComponent, reactive, toRef, ref } from 'vue';
import Child from './components/Child.vue';
export default defineComponent({
  name: 'App',
  components: { Child },
  setup() {
    const state = reactive({
      age: 18,
      money: 100,
    });
    const age = toRef(state, 'age');
    const money = ref(state.money);
    // ref是拷贝了一份出来，toRef是响应式的
    const update = () => {
      console.log('update');
      // money.value += 10;
      // state.age += 5;
      age.value += 6;
    };
    return {
      state,
      age,
      money,
      update,
    };
  },
});
</script>
