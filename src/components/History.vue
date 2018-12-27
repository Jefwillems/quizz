<template lang="pug">
  v-expansion-panel
    v-expansion-panel-content(v-for="(q,index) in answered_questions" :key="index")
      div(slot="header" v-html="q.question")
      v-card(:color="q.correct_answer===q.answer?'success':'warning'")
        v-card-text You answered: {{q.answer}}
        v-card-text Correct answer: {{q.correct_answer}}
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['answered_questions']),
  },
};
</script>
<style lang="scss" scoped>
</style>
