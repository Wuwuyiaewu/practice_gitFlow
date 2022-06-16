<template>
  <div class="practice">
    <h1>Counter</h1>
  </div>
  <div>Counter: {{ count }}</div>
  <div class="btn">
    <button @click="decrease">-1</button>
    <button @click="increase">+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
      const age = ref<number | string>(25)

    const count = reactive({
        count: 0 as number 
    })
    // 不要縮寫
    const increase = function () {
      count.count += 1 ;
    };
    const decrease = function () {
      count.count -= 1;
    };

    return {
      decrease,
      increase,
        ...toRefs(count),
      age
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  margin: 10px;
}
.btn button {
  width: 40px;
  height: 40px;
  padding: 4px;
  margin: 10px;
}
</style>
