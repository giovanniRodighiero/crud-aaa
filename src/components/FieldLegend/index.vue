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
    background-color: $color-grey;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper {
    text-align: center;
  }

  .title, .description {
    color: $color-dark;
    margin: 0;
  }

  .title {
    font-size: font-size(lg);
    font-weight: bold;
    padding: rem(10);
  }

  .description {
    padding: rem(20) rem(5);
  }

</style>


