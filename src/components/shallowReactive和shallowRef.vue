<template>
  <h2>shallowReactive和shallowRef</h2>
  <!-- shallow是浅的意思 -->
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <h3>m4:{{ m4 }}</h3>
  <hr />
  <button @click="update">update</button>
</template>
<script>
import { defineComponent, reactive, shallowReactive, shallowRef, ref } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    // reactive是深度劫持---深度响应式
    const m1 = reactive({
      name: 'm1',
      age: 10,
      cars: {
        name: '奔驰',
        color: 'red',
      },
    });
    // shallowReactive是浅度劫持---浅度响应式
    const m2 = shallowReactive({
      name: 'm2',
      age: 11,
      cars: {
        name: '奔驰',
        color: 'red',
      },
    });
    // ref深度劫持---深度响应式---做了reactive的处理

    const m3 = ref({
      name: 'm3',
      age: 12,
      cars: {
        name: '奔驰',
        color: 'red',
      },
    });
    // shallowRef是浅度劫持---浅度响应式

    const m4 = shallowRef({
      name: 'm4',
      age: 13,
      cars: {
        name: '奔驰',
        color: 'red',
      },
    });
    const update = () => {
      // 修改m1的数据===> reactive方式
      // m1.name += '===';
      // m1.cars.name='奥迪'
      // 修改m2的数据===> shallowReactive方式
      // m2.name+='==='
      // m2.cars.name='奥迪'
      // 修改m3的数据===> ref方式
      // m3.value.name += '---';
      // m3.value.cars.name='奥迪'
      // 修改m4的数据===> shallowRef方式
      m4.value.name+='===='
    };
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
});
</script>
