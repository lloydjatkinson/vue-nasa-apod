<template>
  <div id="app">
    <ApodPhoto />
  </div>
</template>

<script>
import ApodPhoto from './components/ApodPhoto';

export default {
    name: 'App',

    components: {
      ApodPhoto
    }
}
</script>

<style>
body {
    background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
