<template>
  <div class="practice">
    <h1>List Demo</h1>
  </div>
  <div class="card" v-for="(item, index) in list" :key="item" @click="alertData(item, index)">
      <li class="cardText">{{item}}</li>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
      const itemList = reactive({
          list: ['AAA', 'BBB', 'CCC']
      })
        const alertData = (value : string, index : number) =>{
            alert('value:' + value + 'index:' + (index + 1))
        }
    return {
        alertData,
        ...toRef(itemList, 'list')
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
.card{
    margin:auto;
    margin:20px 20px;
    padding:20px;
    background:rgb(235, 235, 235);
    cursor:pointer;
}
.cardText{
    list-style-type: none;
}


</style>
