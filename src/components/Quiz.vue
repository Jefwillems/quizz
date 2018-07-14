<template>
  <div class="fullscreen">
    <div class="quiz">
      <div class="element">
        <v-select
          @input="update_category"
          :options="alphabeticalCategories"
          :value="selected_category"
        ></v-select>
      </div>
      <div class="element">
        <v-select
          @input="update_difficulty"
          :options="difficulties"
          :value="current_difficulty"
        ></v-select>
      </div>
      <div class="element btn">
         <button @click="get_new_questions">go to quiz</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import types from '../store/types';

export default {
  mounted() {
    this.getCategories();
  },
  computed: {
    ...mapState([]),
    ...mapGetters(['alphabeticalCategories', 'difficulties', 'selected_category', 'current_difficulty']),
  },
  methods: {
    getCategories() {
      this.$store.dispatch(types.actions.FETCH_CATEGORIES);
    },
    update_category(event) {
      this.$log.info('CAT');
      this.$store.commit(types.mutations.UPDATE_CATEGORY, event.id);
    },
    update_difficulty(event) {
      this.$log.info('DIFF');
      this.$store.commit(types.mutations.UPDATE_DIFFICULTY, event.id);
    },
    get_new_questions() {
      this.$router.push('/question');
    },
  },
};
</script>
<style lang="scss" scoped>
$dark: #35414a;
$semilight: #86919a;
$light: #cccccc;
$blue: #5aafee;
.fullscreen {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .quiz {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    .element {
      display: flex;
      flex-direction: row;
      margin: 16px 0;
      button {
        width: 50%;
      }
      .v-select {
        width: 100%;
        color: $light;
      }
    }
  }
}
</style>
