<template>
  <div class="q_wrapper">
      <div v-bind:class="{
        green:success,
        red:!success,
        }">Previous question</div>
      <p class="score" v-html="scoreString"></p>
      <p class="question" v-html="not_answered_question.question"></p>
      <div class="answers" v-if="not_answered_question.type === 'multiple'">
        <a class="answer"
           v-for="q in shuffled_answers"
           :key="q"
           @click="answer(not_answered_question, q)">
            <span v-html="q"></span>
        </a>
      </div>
      <div class="answers" v-if="not_answered_question.type === 'boolean'">
        <a class="answer" @click="answer(not_answered_question,'True')">
            <span>True</span>
        </a>
        <a class="answer" @click="answer(not_answered_question,'False')">
            <span>False</span>
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
.q_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    width: 80%;
    margin: 0 auto 3rem;
  }
  .score {
    text-align: center;
  }
  .question {
    font-size: 2rem;
    text-align: center;
  }
  .answers {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    .answer {
      flex-basis: 40%;
      text-align: center;
      padding: 10px;
      width: 30%;
      margin: 1rem 0;

      border: 2px solid #3e3e3e;
      border-radius: 5px;

      transition: background 0.15s ease-in;
      &:hover {
        background: #3e3e3e;
      }
      span {
        font-size: 1.5rem;
      }
    }
  }
}
</style>

