<template lang="pug" >
  v-container(fluid grid-list-xl)
    //- img(alt="Vue logo" src="../assets/trivialogo.png")
    setting
    v-layout(wrap align-center)
      v-flex(xs12 d-flex)
        v-btn(color="primary" @click="goToQuiz") GO
</template>

<script>
import Setting from '@/components/Setting.vue';

export default {
  name: 'Home',
  components: { Setting },
  methods: {
    goToQuiz() {
      this.$router.push({ name: 'quiz' });
    },
  },
};
</script>
