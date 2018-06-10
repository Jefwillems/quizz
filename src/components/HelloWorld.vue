<template>
  <div>
    <p>{{ count }}</p>
    <br>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>
      <button @click="getCategories">categories</button>
    </p>
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>question count</th>
        </tr>
        <tr v-for="cat in alphabeticalCategories" v-bind:key="cat.id">
          <td>{{ cat.id }}</td>
          <td>{{ cat.name }}</td>
          <td>{{ cat_question_count(cat.id) }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import types from '../store/types';

export default {
  computed: {
    ...mapState([
      // map this.count to store.state.count
      'count',
    ]),
    ...mapGetters(['alphabeticalCategories', 'cat_question_count']),
  },
  methods: {
    increment() {
      this.$store.dispatch('increment');
    },
    decrement() {
      this.$store.dispatch('decrement');
    },
    getCategories() {
      this.$store.dispatch(types.actions.FETCH_CATEGORIES);
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

table {
  width: 60%;
  margin: 0 auto;
}
</style>
