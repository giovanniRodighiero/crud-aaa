import { mapGetters, mapActions, mapState } from 'vuex';

import Card from '@/components/Card';

export default {
  name: 'dashboard',
  components: {
    Card
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
    prepareFields ({ label, name, fields }) {
      const preparedFields = [];
      fields.forEach(field => {
        if (field.showInHomepage && this.contents[name]) {
          preparedFields.push({
            label: field.label,
            value: this.contents[name][field.name]
          });
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