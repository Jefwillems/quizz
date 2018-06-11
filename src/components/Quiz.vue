<template>
    <div class="quiz">

    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import types from '../store/types';

export default {
  computed: {
    ...mapState([]),
    ...mapGetters(['alphabeticalCategories', 'cat_question_count']),
  },
  methods: {
    getCategories() {
      this.$store.dispatch(types.actions.FETCH_CATEGORIES);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
