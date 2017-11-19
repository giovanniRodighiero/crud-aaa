<template>
  <div :class="$style.field">
    <span :class="$style.label">{{label}}:</span>
    <p
      v-if="type === 'html-editor'"
      v-html="truncatedHtml"
      :class="$style.value">
    </p>
    <p
      v-else
      :class="$style.value"
    >{{value}}</p>
  </div>
</template>

<script>
export default {
  name: 'BaseCardFieldSimple',
  props: {
    label: {
      type: String
    },
    value: {
      type: [String, Number, Boolean]
    },
    type: {
      type: String
    }
  },
  computed: {
    truncatedHtml: function () {
      if (this.type === 'html-editor') {
        return this.value.substring(0, 50).concat('<span>...</span>');
      }

    }
  },
}
</script>

<style lang="scss" module>
  .field {
    display: flex;
    margin: rem(10) 0;
    padding-left: 10px;
  }

  .label {
    text-transform: capitalize;
    font-size: rem(18);
  }

  .value {
    margin: 0 10px;
    p {
      margin: 0;
    }
    span {
      display: inline;
    }
  }
</style>


