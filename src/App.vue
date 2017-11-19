<template>
  <div :class="$style.rootWrapper">
    <router-view name="SideMenu"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';

export default {
  name: 'CrudAaa',
  props: {
    baseUrl: {
      type: String,
      required: false,
      default: 'localhost:3000'
    },
    configEndpoint: {
      type: String,
      required: false,
      default: '/admin-config'
    },
    loginEndpoint: {
      type: String,
      required: false,
      default: '/login'
    },
    lang: {
      type: String,
      default: 'en'
    }
  },
  async created () {

    // SET UP VALIDATION MESSAGES LANG
    this.$validator.locale = this.lang;

    // SET UP GLOBAL LANG
    this.setLocale(this.lang);
    this.$i18n.locale = this.lang;

    // SET UP BASE URL FOR AXIOS
    this.axios.defaults.baseUrl = this.baseUrl;

    // SET THE INFOS IN THE STORE (ConfigModule)
    await this.initialSetup({
      baseUrl: this.baseUrl,
      configEndpoint: this.configEndpoint,
      loginEndpoint: this.loginEndpoint
    });
  },
  methods: {
    ...mapActions('ConfigModule', [
      'initialSetup',
      'setLocale'
    ])
  }
}
</script>

<style lang="scss" module>
@import "./styles/app.scss";

.rootWrapper {
  width: 100%;
}
</style>
