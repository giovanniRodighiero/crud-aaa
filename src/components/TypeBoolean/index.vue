<template>
  <div class="type-input">
    <tool-tip :message="field.tipMessage" />
    <label :for="field.name" class="type-input__label">{{field.label}}</label>
    <input
      class="type-input__input"
      type="checkbox"
      v-validate="field.validation || ''"
      :name="field.name"
      :value="checkboxValue"
      :checked="checkboxValue"
      @click="onChange"
    />
  </div>
</template>

<script>
import ToolTip from '@/components/ToolTip';
import BreadCrumbs from '@/components/BreadCrumbs';

export default {
  name: 'TypeBoolean',
  props: ['field', 'contents', 'parents'],

  components: {
    ToolTip,
    BreadCrumbs
  },

  data () {
    return {
      checkboxValue: false
    }
  },

  created () {
    if (this.contents[this.field.name])
      this.checkboxValue = this.contents[this.field.name];
  },

  methods: {
    onChange: function (event) {
      this.checkboxValue = !this.checkboxValue;
      this.$emit('input-change', {
        parents: [ ...this.parents, this.field ],
        value: this.checkboxValue
      });
    }
  }
}
</script>