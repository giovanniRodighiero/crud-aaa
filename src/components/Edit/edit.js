/*=============================================
=            Edit Component Infos            =
=============================================*/
/*
  It handles all the fields value bindings and submit.

  Should be used by other containers like the update or new page which hold the logic for structure, contents and submit function.
 */


import set from 'lodash.set';
import get from 'lodash.get';

import Field from '@/components/Field';
import Notification from '@/components/Notification';

export default {
  name: 'Edit',
  props: {
    structure: {
      type: Object,
      required: true,
      default: () => {}
    },
    contents: {
      type: Object,
      required: true,
      default: () => {}
    },
    submit: {
      type: Function,
      required: true,
      default: () => console.error('submit function not provided')
    },
    requestDone: {
      type: Boolean,
      default: true,
    },
    serverErrors: null
  },
  components: {
    Field,
    Notification
  },

  data () {
    return {
      submitted: false
    }
  },

  methods: {
    onInputChange: function ({ parents, value }) {
      const newContents = { ...this.contents };
      const parentsNames = parents.map(parent => parent.name);
      set(newContents, parentsNames, value);
      this.$emit('contents-updated', newContents);
    },

    onAddItem: function ({ parents, value, fields }) {
      const parentsNames = parents.map(parent => parent.name);
      const array = get(this.contents, parentsNames);
      const values = {}
      fields.forEach(field => values[field.name] = '');
      array.push({ ...values, ...value });
    },

    onRemoveItem: function ({ parents, index }) {
      const parentsNames = parents.map(parent => parent.name);
      const array = get(this.contents, parentsNames);
      array.splice(index, 1);
    },

    _submit: function () {
      this.submit(this.contents);
      this.submitted = true;
    }
  },

  computed: {
    blocks: function () {
      return this.structure.blocks;
    },

    showNotification: function () {
      return this.requestDone && this.submitted;
    },

    message: function () {
      if (!!this.serverErrors)
        return this.serverErrors.data;
      return 'Updated Successfully !';
    },

    notificationType: function () {
      if (!!this.serverErrors)
        return 'danger';
      return 'success';
    }
  }
};