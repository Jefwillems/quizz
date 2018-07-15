<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
$dark: #35414a;
$semilight: #86919a;
$light: #cccccc;
$blue: #5aafee;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $light;
  width: 100vw;
  height: 100vh;
}
body,
html {
  background: $semilight;
  margin: 0;
  padding: 0;
}
</style>
