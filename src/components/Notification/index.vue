<template>
  <div
    v-if="!hidden"
    class="notification"
    :class="{
      'notification--danger': isDanger,
      'notification--success': isSuccessfull
      }">
    <p>{{title}}</p>
    <ul v-if="isDanger" class="notification__list">
      <li v-for="(msg, index) in messageArray" :key="index">{{msg[1]}}</li>
    </ul>
    <p v-else>{{message}}</p>
    <span class="notification__close"></span>
  </div>
</template>

<script>

export default {
  name: 'Notification',
  props: ['message', 'type'],

  data () {
    return {
      hidden: false
    }
  },

  computed: {

    title: function () {
      if (this.type === 'danger')
        return 'Ops ! Errors while updating';
      if (this.type === 'success')
        return 'Smooth !';
    },

    messageArray: function () {
      return Object.entries(this.message);
    },

    isDanger: function () {
      return this.type === 'danger';
    },

    isSuccessfull: function () {
      return this.type === 'success';
    }
  },

  methods: {
    hide: function () {
      this.hidden = true;
    }
  }

}

</script>

<style lang="scss">

  .notification {
    width: 80%;
    color: white;
    min-height: 100px;
    margin: 0 auto;
    border: 1px solid $grey;
    position: relative;
  }

  .notification--danger {
    background-color: $red;
  }

  .notification--success {
    background-color: $green;
  }

  .notification__close {
    position: absolute;
    right: 0;
    top: 0;
    height: 20px;
    width: 20px;
    display: block;
  }

  .notification__list {
    text-align: left;
    margin-left: 10%;
  }

</style>