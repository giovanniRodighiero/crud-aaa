import { mapGetters, mapActions, mapState } from 'vuex';

import BaseCard from '@/components/BaseCard';

export default {
  name: 'dashboard',
  components: {
    BaseCard
  },

  created () {
    // watch for changes on singlePages array, for each of them the its contents
    this.$store.watch(() => this.singlePages, () => this.fetchAllPagesContents());
  },
  methods: {
    ...mapActions('SinglePagesModule', [
      'fetchPageContents',
      'fetchAllPagesContents'
    ]),

    // CREATE LABEL/VALUE OBJECTS TO USE WITH CARDS
    prepareFields ({ label, name, fields, contents = false }) {
      if (!contents)
        contents = this.contents;
      const preparedFields = [];
      fields.forEach(field => {
        if (field.showInHomepage && contents[name]) {
          const aux = {
            label: field.label,
            value: contents[name][field.name],
            type: field.type,
          };
          if (field.type === 'object')
            aux['infos'] = this.prepareFields({
              name: field.name,
              fields: field.fields,
              contents: contents[name]
            });
          if (field.type === 'array')
            aux['value'] = contents[name][field.name].length;
          preparedFields.push(aux);
        }
      });
      return preparedFields;
    }
  },
  computed: {
    ...mapGetters('SinglePagesModule', [
      'singlePages'
    ]),
    ...mapState('SinglePagesModule', {
      contents: state => state.pagesContents,
    })

  }
}