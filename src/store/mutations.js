export default {
  increment: (state) => {
    state.count += 1;
  },
  decrement: (state) => {
    state.count -= 1;
  },
  update_categories: (state, data) => {
    state.categories = data;
  },
  update_cat_count: (state, data) => {
    const i = state.categories.findIndex((el) => el.id === data.category_id);
    const cat = state.categories.splice(i, 1)[0];
    cat.question_count = data.category_question_count.total_question_count;
    state.categories.push(cat);
  },
};
