<template>
  <div>
      <div v-bind:class="{
        green:success,
        red:!success,
        }">Previous question</div>
      <p v-html="scoreString"></p>
      <p v-html="not_answered_question.question"></p>
      <div v-if="not_answered_question.type === 'multiple'">
        <a v-for="q in shuffled_answers" :key="q" @click="answer(not_answered_question, q)">
          <div class="answer">
            <span v-html="q"></span>
          </div>
        </a>
      </div>
      <div v-if="not_answered_question.type === 'boolean'">
        <a @click="answer(not_answered_question,'True')">
          <div class="answer">
            <span>True</span>
          </div>
        </a>
        <a @click="answer(not_answered_question,'False')">
          <div class="answer">
            <span>False</span>
          </div>
        </a>
      </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import types from '../store/types';

export default {
  beforeMount() {
    this.$store.dispatch(types.actions.FETCH_QUESTIONS);
  },
  data() {
    return {
      success: false,
    };
  },
  computed: {
    ...mapState(['questions']),
    ...mapGetters(['not_answered_question', 'score']),
    shuffled_answers() {
      return this.shuffleAnswers(this.not_answered_question.correct_answer,
        this.not_answered_question.incorrect_answers);
    },
    scoreString() {
      return `${this.score.correct} / ${this.score.total}`;
    },
  },
  methods: {
    answer(question, answer) {
      if (this.$store.state.questions.filter(el => el.answered === false).length === 2) {
        this.$store.dispatch(types.actions.FETCH_QUESTIONS);
      }
      if (question.correct_answer === answer) {
        this.success = true;
        this.$store.commit(types.mutations.ANSWER_CORRECT, question);
      } else {
        this.success = false;
        this.$store.commit(types.mutations.ANSWER_INCORRECT, question);
      }
    },
    shuffleAnswers(correct, incorrect) {
      const array = [correct, ...incorrect];
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
};
</script>
<style lang="scss" scoped>
.red {
  background-color: red;
}
.green {
  background-color: green;
}
</style>

