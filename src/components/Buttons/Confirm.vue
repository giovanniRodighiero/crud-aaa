<template>
  <button :class="[$style.btn, $style.btnConfirm]" :type="type" @click="$emit('click')">
    <span :class="[$style.label, $style.confirmLabel]">{{label}}</span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    label: String
  }
}
</script>

<style lang="scss" module>
  @import "./shared-styles.scss";

  .btnConfirm {
    background-color: $color-green;
    color: $color-light;
    border: 2px solid $color-green;

    &:hover {
      background-color: $color-light;
      color: $color-green;
      border: 2px solid $color-green;
    }
  }

  .basePseudo {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    height: 2px;
    width: 14px;
    background-color: $color-green;
    opacity: 1;
    transition: opacity .25s ease-out;
    transform-origin: center;
  }

  .btnConfirm {
    &:hover {
      .confirmLabel {
        transform: translateX(-15%);
        &::after {
          @extend .basePseudo;
          width: 8px;
          transform: rotateZ(45deg) translateY(-50%) translate(-7px, 10px);
        }
        &::before {
          @extend .basePseudo;
          transform: rotateZ(-45deg) translateY(-50%);
        }
      }
    }
  }
</style>

