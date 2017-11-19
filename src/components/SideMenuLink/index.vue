<template>
  <router-link :to="to" :class="$style.link">
    <span :class="$style.label">{{label}}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String | Object,
    label: String
  },
}
</script>

<style lang="scss" module>
$font-size: 18px !default;

  .link {
    text-align: left;
    color: $color-light;
    font-size: rem($font-size);
    text-decoration: none;
    display: block;
  }

  .label {
    display: block;
    width: 90%;
    height: 100%;
    padding-right: rem(10);
    padding-bottom: rem(5);
    position: relative;
    text-transform: capitalize;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: $color-light;
      transform: scaleX(0.2);
      transition: transform .25s ease-out;
      transform-origin: left;
    }

    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
  }

</style>
