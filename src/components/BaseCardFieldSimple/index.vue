<template>
  <div class="base-card-field-simple">
    <span class="base-card-field-simple__label">{{label}}:</span>
    <p class="base-card-field-simple__value" v-if="type === 'html-editor'" v-html="truncatedHtml"></p>
    <p class="base-card-field-simple__value" v-else>{{value}}</p>
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

<style lang="scss">
  .base-card-field-simple {
    display: flex;
    margin: 5px 0;
    padding-left: 10px;
  }

  .base-card-field-simple__label {
    text-transform: capitalize;
  }

  .base-card-field-simple__value {
    margin: 0 10px;
    p {
      margin: 0;
    }
    span {
      display: inline;
    }
  }
</style>


