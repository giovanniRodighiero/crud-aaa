<template>
  <div class="row">
    <div class="col-xs-2">
      <field-legend :field="card" />
    </div>
    <div class="col-xs-10">
      <field
        v-for="(field, subindex) in fieldsToUse"
        :field="field"
        :contents="filterdContents"
        :parents="filteredParents"
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
  },
  computed: {
    filterdContents: function () {
      if (this.card.name && this.card.fields)
        return this.contents[this.card.name];
      return this.contents;
    },
    filteredParents: function () {
      if (this.card.name && this.card.fields)
        return [this.card];
      return [];
    },
    fieldsToUse: function () {
      if (this.card.fields && this.card.fields.length > 0)
        return this.card.fields;
      return [this.card];
    }
  }
}
</script>

