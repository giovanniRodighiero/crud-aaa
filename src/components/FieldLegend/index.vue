<template>
  <div :class="$style.fieldLegend">
    <div :class="$style.wrapper">
      <p :class="$style.title">{{field.label}}</p>
      <p :class="$style.description">{{field.tipMessage}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    field: Object
  }
}
</script>

<style lang="scss" module>
  .fieldLegend {
    height: 100%;
    width: 100%;
    // background-color: $color-grey;
    border-right: 3px solid $color-grey;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper {
    text-align: left;
  }

  .title, .description {
    color: $color-dark;
    margin: 0;
  }

  .title {
    font-size: rem(18);
    font-weight: bold;
    padding: rem(5);
  }

  .description {
    padding: rem(20) rem(5);
  }

</style>


