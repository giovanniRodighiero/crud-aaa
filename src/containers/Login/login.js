import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('LoginModule', [
      'submitLogin'
    ]),
    submit: async function () {
      const response = await this.submitLogin({ email: this.email, password: this.password });
      if (!!response) {
        window.localStorage.setItem('crudaaa', response.token);
        this.$router.push({ name: 'dashboard' });
      }
    },
  },
  computed: {
    ...mapGetters('LoginModule', [
      'isFetching',
      '_errors'
    ]),
    showErrors: function () {
      return !!this._errors && !this.isFetching;
    },
    errorMessages: function () {
      if (!!this._errors && !!this._errors.messages)
        return this._errors.messages;
      return [];
    }
  }
};