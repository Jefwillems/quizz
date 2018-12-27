import themePlugin from './theme';

const plugins = [themePlugin];
export default {
  install(vue) {
    plugins.forEach(p => vue.use(p.plugin, p.options));
  },
};
