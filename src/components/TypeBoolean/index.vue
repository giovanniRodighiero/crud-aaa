<template>
  <div class="type-input">
    <tool-tip message="lorem" />
    <bread-crumbs :field="field" :parents="parents" />
    <input
      class="type-input__input"
      type="checkbox"
      :name="field.name"
      :value="checkboxValue"
      :checked="contents"
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
    this.checkboxValue = this.contents;
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