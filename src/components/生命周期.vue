<template>
  <h3>Child父级组件</h3>
  <h3>msg:{{ msg }}</h3>
  <button @click="update">update</button>
</template>
<script>
// 3.0当中的生命周期钩子速度都比2.x当中的生命周期钩子快
import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
export default defineComponent({
  name: 'Child',
  // vue.2x当中的生命周期的钩子
  beforeCreate() {
    console.log('2.x的beforeCreate');
  },
  created() {
    console.log('2.x的created');
  },
  beforeMount() {
    console.log('2.x的beforeMount');
  },
  mounted() {
    console.log('2.x的mounted');
  },
  beforeUpdate() {
    console.log('2.x的beforeUpdate');
  },
  updated() {
    console.log('2.x的updated');
  },
  beforeUnmount() {
    console.log('2.x的beforeUnmount');
  },
  unmounted() {
    console.log('2.x的unmounted');
  },
  setup() {
    console.log('3.0的setup');
    const msg = ref('kk');
    const update = () => {
      msg.value += '====';
    };
    onBeforeMount(() => {
      console.log('3.0的onBeforeMount');
    });
    onMounted(() => {
      console.log('3.0的onMounted');
    });
    onBeforeUpdate(() => {
      console.log('3.0的onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('3.0的onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('3.0的onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('3.0的onUnmounted');
    });
    return {
      msg,
      update,
    };
  },
});
</script>

父级
<template>
  <h2>APP父级组件</h2>
  <button @click="isShow = !isShow">切换显示</button>
  <hr />
  <Child v-if="isShow" />
</template>
<script>
import { defineComponent, ref } from 'vue';
import Child from './components/Child.vue';
export default defineComponent({
  name: 'APP',
  components: { Child },
  setup() {
    const isShow = ref(true);
    return {
      isShow,
    };
  },
});
</script>
