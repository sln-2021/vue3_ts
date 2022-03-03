<template>
  <h2>CustomRef的使用</h2>
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>
<script lang="ts">
import { customRef, defineComponent, ref } from 'vue';
// 防抖函数  value是传入的数据，数据类型不确定所以哦使用泛型T,

function useDebouncedRef<T>(value: T, delay = 200) {
  let timeOutId: number;
  // 存储定时器得id得变量
  return customRef((track, trigger) => {
    return {
      // 返回数据
      get() {
        // 告诉Vue追踪数据
        track();
        return value;
      },
      // 设置数据
      set(newValue: T) {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
          value = newValue;
          // 告诉Vue更新界面
          trigger();
        }, delay);
      },
    };
  });
}
export default defineComponent({
  name: 'App',
  setup() {
    // const keyword = ref('abc');
    const keyword = useDebouncedRef('abc', 500);
    return {
      keyword,
    };
  },
});
</script>
