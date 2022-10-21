<template>
  <div v-on:click="action(id)" class="button" :style="backgroundColor"/>
</template>
<script>


export default {
  name: 'ButtonLike',
  props:{
    id: String,

  },
  data: function () {
    return {
      potionsInfo: 0,
    }
  },
  methods:{
    action(id){
      let infoLikes = this.$store.state.infoLikes
      if(infoLikes.find((element) => element === id)){
        infoLikes = infoLikes.filter((element) => element !== id)
      }else{
        infoLikes.push(id);
      }
      localStorage.setItem('favorites', infoLikes);
      this.$store.commit('setInfoLikes', infoLikes);
    }
  },
  computed:{
    backgroundColor(){
      if(this.$store.state.infoLikes.find((element) => element === this.id)){
        return 'background-color: red'
      }
      return 'background-color: blue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button{
  width: 20px;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  right: 10px;
}
</style>
