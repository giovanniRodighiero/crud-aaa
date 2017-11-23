<template>
  <button :class="[$style.btn, $style.btnDelete]" :type="type" @click="$emit('click')">
    <span :class="[$style.label, $style.deleteLabel, labelSize]">{{label}}</span>
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

  .btnDelete {
    background-color: $color-red;
    color: $color-light;
    border: 2px solid $color-red;

    &:hover {
      background-color: $color-light;
      color: $color-red;
      border: 2px solid $color-red;
    }
  }

  .basePseudo {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    height: 2px;
    width: 14px;
    background-color: $color-red;
    opacity: 1;
    transition: opacity .25s ease-out;
    transform-origin: top;
  }

  .btnDelete {
    &:hover {
      .deleteLabel {
        transform: translateX(-15%);

        &::after {
          @extend .basePseudo;
          transform: rotateZ(45deg) translateY(-50%);
        }
        &::before {
          @extend .basePseudo;
          transform: rotateZ(-45deg) translateY(-50%);
        }
      }
    }
  }
</style>