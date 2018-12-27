<template lang="pug">
  v-layout(wrap align-center)
    v-flex(xs12 sm6 d-flex)
      v-select(:items="categories"
              item-text="name"
              item-value="id"
              label="Category"
              outline
              v-model="selected_category")
    v-flex(xs12 sm6 d-flex)
      v-select(:items="difficulties"
              item-text="name"
              item-value="name"
              v-model="selected_difficulty"
              label="Difficulty"
              outline)
</template>
<script>
import { mapGetters } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['difficulties', 'categories']),
    ...mapFields(['selected_category', 'selected_difficulty']),
  },
};
</script>
<style lang="scss" scoped>
</style>
