import BreadCrumbs from '@/components/BreadCrumbs';
import ToolTip from '@/components/ToolTip';

export default {
  name: 'TypeInput',
  props: {
    field: null,
    contents: null,
    parents: {
      type: Array,
      default: []
    }
  },

  components: {
    BreadCrumbs,
    ToolTip
  },

  mounted () {
    if (!!this.$refs.input)
      this.$refs.input.type = this.typeToUse;
  },

  computed: {
    useInput: function () {
      return this.field.type != 'textarea';
    },

    typeToUse: function () {
      if (this.field.type === 'boolean')
        return 'checkbox';
      return this.field.type;
    },

    breadCrumb: function () {
      let breadCrumb = '';
      this.parents.forEach(parent => {
        breadCrumb = `${breadCrumb} > ${parent.label}`;
      });
      breadCrumb = `${breadCrumb} > ${this.field.label}`;
      return breadCrumb;
    },

    customModel: {
      get() {
        if (typeof this.contents != 'object')
          return this.contents;
        if (typeof this.contents[this.field.name] === 'string')
          return this.contents[this.field.name];
        return '';
      },
      set(value) {
        this.$emit('input-change', {
          parents: [ ...this.parents, this.field ],
          value
        });
      }
    }
  },
}