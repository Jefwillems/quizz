<template lang='pug'>
  v-app(dark)
    v-content
      v-container(fluid)
        router-view
    v-footer(app)
</template>
<script>
import { FETCH_CATEGORIES, FETCH_TOKEN } from './store/types';

export default {
  mounted() {
    this.$store.dispatch(FETCH_CATEGORIES);
    this.$store.dispatch(FETCH_TOKEN);
  },
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
