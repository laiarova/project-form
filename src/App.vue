<template>
  <FilmsList msg="Welcome to Your Vue.js App"/>
</template>

<script>
import FilmsList from './components/FilmsList.vue'

export default {
  name: 'App',
  components: {
    FilmsList
  }
}
</script>

<style>
body{
  display: flex;
  justify-content: center;
}
</style>
