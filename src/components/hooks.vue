<template>
  <h2>自定义hook函数</h2>
  <h2>x:{{ x }} ,y:{{ y }}</h2>
  <h2 v-if="loading">正在加载中...</h2>
  <h2 v-else-if="errorMsg">{{ errorMsg }}</h2>
  <h2 v-else>
    <div v-for="(item, index) in data" key="index">
      <li>id:{{ item.id }}</li>
      <li>address:{{ item.address }}</li>
      <li>distance:{{ item.distance }}</li>
    </div>
    <li>name:{{ data.name }}</li>
    <li>year:{{ data.year }}</li>
    <li>age:{{ data.age }}</li>
  </h2>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue';
import useMousePosition from '../utils/useMousePositions';
import useRequest from '../utils/useRequest';
interface AddressData {
  name: string;
  year: number;
  age: number;
}
interface ProductData {
  id: number;
  address: string;
  distance: string;
}
export default defineComponent({
  name: '',
  setup() {
    const { x, y } = useMousePosition();
    // const { loading, data, errorMsg } = useRequest<AddressData>('/data/address.json');
    const { loading, data, errorMsg } = useRequest<ProductData[]>('/data/products.json');
    watch(data, () => {
      if (data.value) {
        console.log(data.value.length);
      }
    });
    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>
