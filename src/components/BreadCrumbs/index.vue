<template>
  <label class="type-input__label" :for="field.name">
      <span
        class="type-input__path"
        v-for="(parent, index) in parents"
        :key="index"
      >{{parent.label || `${parent.name}`}}</span>
      <span class="type-input__path">{{labelToUse}}</span>
    </label>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    field: {
      type: Object,
      default: () => {}
    },
    parents: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    labelToUse: function () {
      if (!this.field.label || this.field.label === '')
        return this.field.name;
      return this.field.label;
    }
  }
}
</script>

<style lang="scss">
  .type-input__path {
    position: relative;
    padding: 0px 10px;
    &:not(:last-of-type) {
      font-weight: normal;
      font-size: 14px;
      color: $grey;
      &::after {
        content: '>';
        position: absolute;
        right: -5px;
        font-size: 18px;
      }
    }
  }
</style>