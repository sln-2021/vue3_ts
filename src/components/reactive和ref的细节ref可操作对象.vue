<template>
  <h2>reactive 和ref的细节问题，ref也可操作对象</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <hr />
  <button @click="update">update</button>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const m1 = reactive({
      name: '小米',
      car: {
        name: '奔驰',
      },
    });
    // ref放入的是对象，是经过reactive的处理，形成了，proxy类型的对象
    const m2 = ref({
      name: '小米',
      car: {
        name: '奔驰',
      },
    });
    const m3 = ref('abc');
    const update = () => {
      m3.value += '==';
      m1.car.name='奥迪'
      m2.value.car.name='baoma'
    };
    return {
      m1,
      m2,
      m3,
      update
    };
  },
});
</script>
