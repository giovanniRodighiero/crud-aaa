import { mapGetters } from 'vuex';

export default {
  name: 'SideMenu',
  computed: {
    ...mapGetters('SinglePagesModule', [
      'singlePages'
    ]),
  }
};