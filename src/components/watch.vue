<template>
  <div>APP父级组件</div>
  <!-- <button @click="msg += '==='">update</button> -->
  <hr />
  <!-- <Child :msg="msg" /> -->
  <fieldset>
    <legend>姓名操作</legend>
    姓氏:<input type="text" placeholder="请输入姓氏" v-model="user.firstName" /><br />
    名字:<input type="text" placeholder="请输入名字" v-model="user.lastName" /><br />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名:<input type="text" placeholder="显示姓名" v-model="fullName1" /><br />
    姓名:<input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
    姓名:<input type="text" placeholder="显示姓名" v-model="fullName3" /><br />
  </fieldset>
</template>
<script>
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue';
import Child from './components/Child.vue';
export default defineComponent({
  name: 'APP',
  components: { Child },
  setup() {
    const msg = ref('what');
    const user = reactive({
      firstName: '东方',
      lastName: '不败',
    });
    // 通过计算属性实现第一个姓名的显示  computed返回的是ref类型的对象
    const fullName1 = computed(() => {
      return user.firstName + '_' + user.lastName;
    });

    const fullName2 = computed({
      get() {
        return user.firstName + '_' + user.lastName;
      },
      set(val) {
        console.log(val, 'vallllllll');
        const arr = val.split('_');
        user.firstName = arr[0];
        user.lastName = arr[1];
      },
    });
    const fullName3 = ref('');
    // 监视 指定的数据 immediate默认执行一次watch，deep深度监视
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + '_' + lastName;
      },
      { immediate: true, deep: true }
    );

    //watchEffect不需要设置immediate，本身默认就会进行监视(默认执行一次)
    // watchEffect(() => {
    //   fullName3.value = user.firstName + '_' + user.lastName;
    // });

    watchEffect(() => {
      const names = fullName3.value.split('_');
      user.firstName = names[0];
      user.lastName = names[1];
    });
    watch([() => user.firstName, () => user.lastName, fullName3], () => {
      console.log('========');
    });
    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>
