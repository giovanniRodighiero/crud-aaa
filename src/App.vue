<template>
  <div class="root-wrapper row reverse">
    <router-view></router-view>
    <router-view name="SideMenu"></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import VeeValidate from 'vee-validate';
import { veeMessages } from '@/i18n';

export default {
  name: 'app',
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
    }
  },
  created() {
    Vue.use(VeeValidate, {
      locale: 'it',
      dictionary: {
        it: {
          messages: veeMessages
        }
      }
    });

    // SET UP BASE URL FOR AXIOS
    this.axios.defaults.baseUrl = this.baseUrl;

    // SET THE INFOS IN THE STORE (ConfigModule)
    this.initialSetup({
      baseUrl: this.baseUrl,
      configEndpoint: this.configEndpoint,
      loginEndpoint: this.loginEndpoint
    });
  },
  methods: {
    ...mapActions('ConfigModule', [
      'initialSetup',
    ])
  }
}
</script>

<style>
.root-wrapper {
  width: 100%;
}
</style>
