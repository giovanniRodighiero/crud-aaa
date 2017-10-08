export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'title not provided',
      required: false
    },
    name: {
      type: String,
      default: '#',
      required: false
    },
    fieldsInfos: {
      type: Array,
      default: () => [],
      required: false
    }
  },
}