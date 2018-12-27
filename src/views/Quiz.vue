<template lang="pug">
  v-container(fluid grid-list-xl)
    v-layout(wrap align-center)
      v-flex(xs12 d-flex)
        question()
    v-layout(wrap align-center)
      v-flex(xs12 d-flex)
        answers()
    v-layout(wrap align-center)
      v-flex(xs12 d-flex)
        history()
</template>
<script>
import { Question, Answers, History } from '../components';
import { types } from '../store';

export default {
  components: { Question, Answers, History },
  beforeCreate() {
    this.$store.dispatch(types.FETCH_QUESTIONS);
  },
  mounted() {},
};
</script>
<style lang="scss">
</style>
