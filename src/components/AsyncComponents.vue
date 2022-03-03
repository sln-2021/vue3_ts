<template>
  <h2>AsyncComponent子级组件的使用</h2>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AsyncComponent',
  setup() {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({
          msg:'what are you '
        })
      },2000)
      })
  },
});
</script>