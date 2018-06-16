<template>
  <div class="quiz">
    <select id="cats" name="categories" @change="update_category">
      <option v-for="category in alphabeticalCategories" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
    <select name="difficulties" id="difficulties" @change="update_difficulty">
      <option v-for="d in difficulties" :key="d.id" :value="d.id">{{ d.name }}</option>
    </select>
    <p>{{ current_category }}</p>
    <p>{{ current_difficulty }}</p>
    <button @click="get_new_questions">get questions</button>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import types from '../store/types';

export default {
  mounted() {
    this.getCategories();
  },
  computed: {
    ...mapState(['difficulties']),
    ...mapGetters(['alphabeticalCategories', 'current_category', 'current_difficulty']),
  },
  methods: {
    getCategories() {
      this.$store.dispatch(types.actions.FETCH_CATEGORIES);
    },
    update_category(event) {
      this.$store.commit(types.mutations.UPDATE_CATEGORY, event.target.value);
    },
    update_difficulty(event) {
      this.$store.commit(types.mutations.UPDATE_DIFFICULTY, event.target.value);
    },
    get_new_questions() {
      this.$store.dispatch(types.actions.FETCH_QUESTIONS);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
