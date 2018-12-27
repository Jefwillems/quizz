<template lang="pug" >
  v-container(fluid grid-list-xl)
    img(alt="Vue logo" src="../assets/trivialogo.png")
    setting
    v-layout(wrap align-center)
      v-flex(xs12 d-flex)
        v-btn(color="primary" @click="goToQuiz") {{ questions_length > 0 ? q_left_text:'GO' }}
    v-layout(wrap align-center)
      v-flex(xs12 d-flex)
        history
</template>

<script>
import { mapGetters } from 'vuex';
import { Setting, History } from '../components';

export default {
  name: 'Home',
  components: { Setting, History },
  data() {
    return {
      q_left_text: 'There are questions in your queue, click to append new ones',
    };
  },
  computed: {
    ...mapGetters(['questions_length']),
  },
  methods: {
    goToQuiz() {
      this.$router.push({ name: 'quiz' });
    },
  },
};
</script>
