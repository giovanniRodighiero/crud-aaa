import BaseCardField from '@/components/BaseCardField';
import BaseBtn from '@/components/Buttons/Neutral';

export default {
  name: 'BaseCard',
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
  components: {
    BaseCardField,
    BaseBtn
  }
}