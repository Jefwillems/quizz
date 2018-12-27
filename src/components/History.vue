<template lang="pug">
  div
    v-expansion-panel
      v-expansion-panel-content(v-for="(q,index) in answered_questions" :key="index")
        div(slot="header" v-html="q.question")
        v-card(:color="q.correct_answer===q.answer?'success':'warning'")
          v-card-text You answered: {{q.answer}}
          v-card-text Correct answer: {{q.correct_answer}}
    v-btn(color="primary" @click="clearHistory") clear history
</template>
<script>
import { mapGetters } from 'vuex';
import { types } from '../store';

export default {
  computed: {
    ...mapGetters(['answered_questions']),
  },
  methods: {
    clearHistory() {
      this.$store.commit(types.CLEAR_HISTORY);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
