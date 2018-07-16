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
         <button @click="get_new_questions"><span>Start</span></button>
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
      this.$store.commit(types.mutations.UPDATE_CATEGORY, event.id);
    },
    update_difficulty(event) {
      this.$store.commit(types.mutations.UPDATE_DIFFICULTY, event.id);
    },
    get_new_questions() {
      this.$store.commit(types.mutations.CLEAR_QUESTIONS);
      this.$router.push('/question');
    },
  },
};
</script>
<style lang="scss">
$dark: #35414a;
$semilight: #86919a;
$light: #dddddd;
$green: #4caf50;
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
      &.btn {
        button {
          width: 100%;
          display: block;
          padding: 0;

          overflow: auto;

          border-width: 0;
          outline: 0;
          border-radius: 2px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

          background-color: $green;
          color: $semilight;

          transition: background-color 0.3s;
          &:hover,
          &:focus {
            background-color: darken($color: $green, $amount: 10%);
          }
          span {
            display: block;
            padding: 9px 24px;
            color: $light;
            font-size: 1rem;
          }
        }
      }
      .v-select {
        width: 100%;
        .dropdown-toggle {
          border: 1px solid rgba(200, 200, 200, 1);
        }
        .selected-tag {
          color: $light;
        }
      }
    }
  }
}
</style>

