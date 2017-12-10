import { mapGetters, mapActions } from 'vuex';

import DeleteBtn from '@/components/Buttons/Delete';
import SideMenuLink from '@/components/SideMenuLink';

export default {
  name: 'SideMenu',
  components: {
    DeleteBtn,
    SideMenuLink
  },

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