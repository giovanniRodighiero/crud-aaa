<template>
  <button :class="[$style.btn, $style.btnAdd]" :type="type" @click="$emit('click')">
    <span :class="[$style.label, $style.addLabel, labelSize]">{{label}}</span>
  </button>
</template>


<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    label: String,
    size: {
      type: String,
      default: 'md'
    }
  },
  computed: {
    labelSize: function () {
      return this.size === 'sm' ? this.$style.labelSmall : '';
    }
  }
}
</script>

<style lang="scss" module>
  @import "./shared-styles.scss";

  .btnAdd {
    background-color: $color-green;
    color: $color-light;
    border: 2px solid $color-green;

    &:hover {
      background-color: $color-light;
      color: $color-green;
      border: 2px solid $color-green;
    }

    .basePseudo {
      content: "";
      position: absolute;
      background-color: $color-green;
      opacity: 1;
      right: 0;
      top: 50%;
      transition: opacity .25s ease-out;
      height: 2px;
      width: 14px;
    }
  }

  .btnAdd {
    &:hover {
      .addLabel {
        transform: translateX(-10%);

        &::after {
          @extend .basePseudo;
          transform-origin: top;
          transform: translateY(-50%);
        }
        &::before {
          @extend .basePseudo;
          transform-origin: center;
          transform: translateY(-50%) rotateZ(90deg);
        }
      }
    }
  }
</style>