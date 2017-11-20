<template>
  <div class="row">
    <div class="col-xs-2">
      <field-legend :field="card" />
    </div>
    <div class="col-xs-10">
      <field
        v-for="(field, subindex) in card.fields"
        :field="field"
        :contents="contents[card.name]"
        :key="subindex"
        :blocks="blocks"
        @input-change="value => $emit('input-change', value)"
        @add-item="value => $emit('add-item', value)"
        @remove-item="value => $emit('remove-item', value)"
      />
    </div>
  </div>
</template>

<script>
import FieldLegend from '@/components/FieldLegend';
import Field from '@/components/Field';

export default {
  props: {
    card: Object,
    contents: Object,
    index: Number,
    blocks: Object
  },
  components: {
    FieldLegend,
    Field
  }
}
</script>

