<template lang="pug">
  v-container(fluid grid-list-xl)
    v-layout(wrap align-center)
      v-flex(xs6 d-flex v-for="answer in selected_q_answers" :key="answer")
        v-card(dark color="primary" @click="answerQuestion(answer)")
          v-card-text(class="px-0" v-html="answer")
</template>
<script>
import { mapGetters } from 'vuex';
import { types } from '../store';

export default {
  computed: {
    ...mapGetters(['selected_q_answers']),
  },
  methods: {
    answerQuestion(answer) {
      this.$store.commit(types.ANSWER_QUESTION, answer);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
