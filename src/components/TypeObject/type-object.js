import Field from '@/components/Field';
import BreadCrumbs from '@/components/BreadCrumbs';
import ToolTip from '@/components/ToolTip';

export default {
  name: 'TypeObject',
  props: ['field', 'contents', 'parents'],
  components: {
    Field,
    BreadCrumbs,
    ToolTip
  },

  data () {
    return {
      open: false
    }
  },

  beforeCreate: function () {
    this.$options.components.Field = require('../Field').default;
  },

  methods: {
    getContents: function (fieldName) {
      if (this.contents)
        return this.contents[fieldName];
      return '';
    },

    onInputChange: function (infos) {
      this.$emit('input-change', infos);
    },

    toggleVisibility: function () {
      this.open = !this.open;
    }
  },

  computed: {
    toggleMessage: function () {
      if (this.open)
        return this.$t('collapse');
      else
        return this.$t('expand');
    },
  }
}