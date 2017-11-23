<template>
<div :class="$style.tooltip" v-if="messagePresent">
  <svg :class="[$style.icon, $style.tooltipIcon]">
    <use xlink:href="#icon-info"></use>
    <symbol id="icon-info" viewBox="0 0 32 32">
    <title>info</title>
    <path d="M14 9.5c0-0.825 0.675-1.5 1.5-1.5h1c0.825 0 1.5 0.675 1.5 1.5v1c0 0.825-0.675 1.5-1.5 1.5h-1c-0.825 0-1.5-0.675-1.5-1.5v-1z"></path>
    <path d="M20 24h-8v-2h2v-6h-2v-2h6v8h2z"></path>
    <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
    </symbol>
  </svg>

  <p :class="$style.message">{{message}}</p>
</div>
</template>

<script>
export default {
  name: 'ToolTip',
  props: {
    message: {
      type: String,
      default: ''
    }
  },

  computed: {
    messagePresent: function () {
      return this.message && this.message != '';
    }
  }
};
</script>

<style lang="scss" module>
.icon {
  color: black;
  display: inline-block;
  width: 12px;
  height: 12px;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.tooltip {
  position: absolute;
  z-index: 1;
  top: -5px;
  left: -10px;
  text-align: right;
}

.tooltipIcon {
  &:hover {
    & + p {
      opacity: 1;
      visibility: visible;
      // height: 100%;
    }
  }
}

.message {
  text-align: left;
  width: 200px;
  background-color: $white;
  border-radius: 15px;
  border: 1px solid $color-dark;
  padding: 5px 10px;
  z-index: 10;
  position: absolute;
  top: -25px;
  left: 20px;
  font-size: 14px;
  line-height: 18px;
  opacity: 0;
  visibility: hidden;
  transition: opacity .25s ease-out;
}
</style>