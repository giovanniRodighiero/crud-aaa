import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SideMenu',
  methods: {
    onLogout: function () {
      this.logout();
      this.$router.push({ name: 'login' });
    },
    ...mapActions('LoginModule', [
      'logout'
    ])
  },
  computed: {
    ...mapGetters('SinglePagesModule', [
      'singlePages'
    ]),
  }
};