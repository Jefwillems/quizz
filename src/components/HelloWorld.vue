<template>
 <div>
    <p>{{count}}</p>
    <br>
    <button v-on:click="increment">+</button>
    <button v-on:click="decrement">-</button>
 </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    // map this.count to store.state.count
    'count',
  ]),
  methods: {
    increment() {
      this.$store.dispatch('increment');
    },
    decrement() {
      this.$store.dispatch('decrement');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
