<template>
  <div class="practice">
    <h1>Search</h1>
  </div>
  <input class="search_btn" type="text" placeholder="Search" v-model="inputText"/>
  <!-- <div>查詢到{{ findItems.length }}筆資料</div> -->
  <!-- <div>
      <li v-for="item in findItems" :key="item">{{item}}</li>
  </div> -->
  <button @click="col()">click</button>
</template>

<script lang="ts">
import {storeToRefs} from 'pinia';
import { useSearchStore } from '@/store/useSearch.js';
import { defineComponent, toRefs, ref, computed } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
      const main = storeToRefs(useSearchStore)
      const { itemList } = main
      const inputText = ref('') //必需加'ref' or 'reactive' 才能呈現出響應是的資料 
    // const findItems = computed(()=>{
    //     return itemList.filter((item) => item.toLowerCase().includes(inputText.value.toLowerCase()))
    // })

    const col = ()=>{
        console.log(main)
    }

    return {
        inputText,
        main,
        // findItems,
        itemList,
        col
    };
  }
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
.search_btn{
    width:200px;
    height:40px;
    font-size:16px;
}
</style>
