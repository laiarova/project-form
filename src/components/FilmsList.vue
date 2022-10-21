<template>
  <div v-for="potion in potionsInfo" :key="potion.id" class="boxInfo">
    <div class="title">
      <p>{{ potion.name }}</p>
      <ButtonLike :id="potion.id"/>
    </div>
    <div class="boxEffects">
      <div class="positive"> <b>Effects:</b> {{ potion.effect ? potion.effect : 'not found' }}</div>
      <div class="negative"> <b>Side effects:</b> {{ potion.sideEffects ? potion.sideEffects : 'not found' }}</div>
    </div>
  </div>
</template>

<script>
import {get} from "../globals/api";
import ButtonLike from "./ButtonLike";
export default {
  name: 'FilmList',
  components:{ButtonLike},
  data: function () {
    return {
      potionsInfo: null,
    }
  },

  beforeMount() {
    get('Elixirs').then(response => {
      if (response && response.data) {
        this.potionsInfo = response.data
      }
    }).catch(() => {
      alert("Se ha producido un error al recubir los datos");
    });
  }
}
</script>

<style scoped>

.boxInfo{
  background-color: aquamarine;
  margin: 10px;
  justify-content: space-between;
  width: 1000px;
  padding: 10px;
  border-radius: 15px;
  position: relative;
}
.title{
  display: flex;
  text-align: center;
}
.title p{
  font-size: 30px;
  margin: 10px 0 18px 0;
  align-self: center;
  flex: 1;
}
.boxEffects{
  display: flex;
  flex:1;
  justify-content: space-around;
}
.boxEffects div{
  border-radius: 10px;
  width: 350px;
  padding: 10px;
}
.boxEffects .positive{
  background-color: lightgreen;
}
.boxEffects .negative{
  background-color: lightcoral;
}
</style>
