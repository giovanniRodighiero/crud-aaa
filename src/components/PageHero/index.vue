<template>
  <div class="row">
    <div class="col-xs-10 col-xs-offset-1">
      <h1 :class="$style.title">{{title}}</h1>
      <h2 :class="$style.subtitle">{{subtitle}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>


<style lang="scss" module>
  .title {
    text-align: center;
    color: $color-dark;
    font-size: font-size(xl);
    text-transform: uppercase;
  }

  .subtitle {
    text-align: center;
    padding: rem(20);
  }
</style>
