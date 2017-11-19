<template>
  <button :class="[$style.btn, theme]" :type="type" @click="$emit('click')">
    <span :class="[$style.label, $style.neutralLabel]">{{label}}</span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    darkTheme: {
      type: Boolean,
      default: false
    },
    label: String
  },

  computed: {
    theme: function () {
      return this.darkTheme ? this.$style.black : this.$style.white;
    },
  }
}
</script>


<style lang="scss" module>
  @import "./shared-styles.scss";

  .white {
    background-color: $color-light;
    color: $color-dark;
    border: 2px solid $color-dark;

    &:hover {
      @extend .black;
    }
  }

  .black {
    background-color: $color-dark;
    color: $color-light;
    border: 2px solid $color-light;

    &:hover {
      @extend .white;
    }
  }

  .basePseudo {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    height: 10px;
    width: 3px;
    background-color: $color-light;
    opacity: 0;
    transition: opacity .25s ease-out .20s;
  }

  .neutralLabel {
    &:hover {
      transform: translateX(-15%);
      &::after {
        opacity: 1;
        transform: rotateZ(50deg) translateY(-10%);
      }
      &::before {
        opacity: 1;
        transform: rotateZ(-50deg) translateY(-90%);
      }
    }

    &::after {
      @extend .basePseudo;
      transform: rotateZ(50deg) translateY(-10%);
      transform-origin: top;
    }
    &::before {
      @extend .basePseudo;
      transform: rotateZ(-50deg) translateY(-90%);
      transform-origin: top;
    }
  }

</style>

