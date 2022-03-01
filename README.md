# vue3_study

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<template>
<!--vue2z中的html模板必须要有一对根标签，vue3组件的html模板可以没有根标签-->
  <div></div>
</template>
<script lang="ts">
// 可以使用ts的代码
import Vue,{defineComponent} from 'vue'
// defineComponent函数，目的是定义一个组件，内部可以传入以恶搞配置对象
export default defineComponent({
  // 暴露出去一个定义好的组件

})
</script>
