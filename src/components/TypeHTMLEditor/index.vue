<template>
  <div class="type-input">
    <tool-tip :message="field.tipMessage" />
    <label :for="field.name" class="type-input__label">{{field.label}}</label>
    <vue-editor
      v-model="htmlContents"
      :id="generateInputId"
      v-validate="field.validation || ''"
      :class="$style.editor"
    ></vue-editor>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

import ToolTip from '@/components/ToolTip';

export default {
  name: 'TypeHTMLEditor',
  props: ['field', 'contents', 'parents'],
  components: {
    ToolTip,
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
    },
    contents: function (contents) {
      if (contents && contents[this.field.name])
        this.htmlContents = contents[this.field.name];
    }
  }
}
</script>

<style lang="scss" module>
  .editor {
    width: 90%;
    margin-left: rem(10);
    text-align: left;
  }

  :global(.ql-container.ql-snow) {
    min-height: rem(100);
  }
</style>