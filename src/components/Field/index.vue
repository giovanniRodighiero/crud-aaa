<template>
  <div :class="$style.field">
    <component
      :is="componentToUse"
      :field="field"
      :contents="contents"
      :parents="parents"
      :blocks="blocks"
      @input-change="onInputChange"
      @add-item="onAddItem"
      @remove-item="onRemoveItem"
    />
  </div>
</template>

<script>
/*=============================================
=              Field Block Infos             =
=============================================*/
/*
  It handles the fields rendering choosing which component should be used by checking the field.type value.
  When the value of the field changes the event is forwarded top, towards Edit component.
*/

import TypeInput from '@/components/TypeInput';
import TypeBoolean from '@/components/TypeBoolean';
import TypeObject from '@/components/TypeObject';
import TypeArray from '@/components/TypeArray';
import TypeImage from '@/components/TypeImage';
import TypeHTMLEditor from '@/components/TypeHTMLEditor';

const TypeInputWhitelist = [
    'text',
    'textarea',
    'number',
    'email',
    'password',
    'date',
  ];

export default {
  name: 'Field',
  props: {
    field: {
      type: Object,
      default: () => {}
    },
    blocks: {
      type: Object,
      default: () => ({})
    },
    contents: null,
    parents: {
      type: Array,
      default: () => []
    }
  },

  components: {
    TypeInput,
    TypeBoolean,
    TypeObject,
    TypeArray,
    TypeImage,
    TypeHTMLEditor,
  },

  methods: {
    onInputChange: function (infos) {
      this.$emit('input-change', infos);
    },

    onAddItem: function (infos) {
      this.$emit('add-item', infos);
    },

    onRemoveItem: function (infos) {
      this.$emit('remove-item', infos);
    }
  },

  computed: {
    componentToUse: function () {
      if (TypeInputWhitelist.includes(this.field.type))
        return 'TypeInput';
      switch (this.field.type) {
        case 'boolean':
          return 'TypeBoolean';
          break;

        case 'object':
          return 'TypeObject';
          break;

        case 'array':
          return 'TypeArray';
          break;

        case 'image':
          return 'TypeImage';
          break;

        case 'html-editor':
          return 'TypeHTMLEditor';
          break;

        default:
          return null;
          break;
      }
    },
  }
};
</script>

<style lang="scss" module>


  .field {

  }
</style>