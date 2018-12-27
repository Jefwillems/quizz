import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

export default {
  plugin: Vuetify,
  options: {
    theme: {
      primary: colors.lightBlue.lighten1,
      secondary: colors.grey.darken1,
      accent: colors.shades.black,
      error: colors.red.accent3,
      info: colors.lightBlue.lighten2,
      success: '#4CAF50',
      warning: colors.orange.darken2,
    },
  },
};
