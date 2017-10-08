import { VueEditor } from 'vue2-editor';

import ToolTip from '@/components/ToolTip';
import BreadCrumbs from '@/components/BreadCrumbs';

export default {
  name: 'TypeHTMLEditor',
  props: ['field', 'contents', 'parents'],
  components: {
    ToolTip,
    BreadCrumbs,
    VueEditor
  },

  data () {
    return {
      htmlContents: ''
    }
  },

  computed: {
    generateInputId: function () {
      return this.parents.reduce((string, parent) => string.concat(parent.name + '-'), '').concat(this.field.name);
    },
  },

  watch: {
    htmlContents: function (newValues) {
      this.$emit('input-change', {
        parents: [ ...this.parents, this.field ],
        value: newValues
      });
    }
  }
}