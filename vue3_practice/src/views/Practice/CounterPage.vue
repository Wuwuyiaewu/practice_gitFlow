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
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0)
    // 不要縮寫
    const increase = function () {
      this.count++;
    };
    const decrease = function () {
      this.count -= 1;
    };

    return {
      decrease,
      increase,
      count
    };
  },
};
</script>
<style scoped>
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
