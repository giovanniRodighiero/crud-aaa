<template>
  <base-card-field-simple
    v-if="type != 'object'"
    :label="label"
    :value="value"
    :type="type"
  />
  <div v-else>
    <span :class="$style.label">{{label}}</span>
    <base-card-field
      v-for="(info, index) in infos"
      :key="index"
      v-bind="info"
    />
  </div>
</template>

<script>
import BaseCardFieldSimple from '@/components/BaseCardFieldSimple';

export default {
  name: 'BaseCardField',
  props: {
    label: {
      type: String
    },
    value: {
      type: [String, Object, Number, Boolean]
    },
    type: {
      type: String
    },
    infos: {
      type: Array
    }
  },
  components: {
    BaseCardFieldSimple,
  }
}
</script>

<style lang="scss" module>
  .label {
    font-weight: bold;
    border-bottom: 1px solid $color-dark;
    width: 100%;
    display: block;
  }
</style>


