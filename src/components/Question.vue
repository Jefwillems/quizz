<template lang="pug">
  v-card(dark color="secondary")
    v-card-text(class="px-0 font-weight-bold headline" v-html="selected_question.question")
    v-card-text(class="px-0 pb-0 pt-4")
      span(class="") {{questions_length}} questions remaining after this
    v-card-text(class="px-0 py-0")
      v-btn(flat color="orange" @click="fetchMoreQuestions") get more
</template>
<script>
import { mapGetters } from 'vuex';
import { types } from '../store';

export default {
  computed: {
    ...mapGetters(['selected_question', 'questions_length']),
  },
  methods: {
    fetchMoreQuestions() {
      this.$store.dispatch(types.FETCH_QUESTIONS);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
