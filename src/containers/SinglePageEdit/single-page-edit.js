import { mapGetters, mapActions } from 'vuex';

import Edit from '@/components/Edit';

export default {
  name: 'EditPage',
  components: {
    Edit
  },

  data () {
    return {
      payload: {},
      watcher: null
    }
  },

  created () {
    // if contents already fetched (ie: coming from homepage), otherwise wait for structure to be available then fetch them
    if (!!this.contents) {
      this.payload = { ...this.contents };
    } else {
      this.setUpContents(this.structure);
      this.watcher = this.$watch('structure', this.setUpContents);
    }
  },

  methods: {
    ...mapActions('SinglePagesModule', [
      'fetchPageContents',
      'updatePage'
    ]),

    setUpContents: async function (structure) {
      if (!!structure) {
        try {
          const contents = await this.fetchPageContents(structure);
          this.payload = { ...contents };
          // TODO: maybe it could stop watching here since contents are loaded ...
        } catch (error) {
          console.error(error);
        }
      }
    },

    onContentsUpdated: function (newContents) {
      this.payload = { ...newContents };
    },

    submit: function (payload) {
      this.updatePage({ payload, page: this.structure});
    }

  },

  computed: {
    ...mapGetters('SinglePagesModule', [
      'singlePages',
      'pagesContents',
      'updatingDone',
      'updatingErrors'
    ]),
    activePageName: function () {
      return this.$route.params.pageName;
    },
    structure: function () {
      return this.singlePages.find((page => page.name === this.activePageName));
    },
    contents: function () {
      return this.pagesContents[this.activePageName];
    },
    ready: function () {
      return (!!this.structure && !!this.contents);
    }
  },

  beforeDestroy () {
    if (this.watcher)
      this.watcher();
  }
};