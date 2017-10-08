import { mapGetters, mapActions } from 'vuex';

import ToolTip from '@/components/ToolTip';
import BreadCrumbs from '@/components/BreadCrumbs';

export default {
  name: 'TypeImage',
  props: ['field', 'contents', 'parents'],

  components: {
    ToolTip,
    BreadCrumbs
  },

  data () {
    return {
      image: ''
    }
  },

  methods: {
    onFileUpload: async function (e) {
      const files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
      const formData = new FormData();
      formData.append('images', files[0]);
      const fileName = await this.uploadFile(formData);
      this.$emit('input-change', {
        parents: [ ...this.parents, this.field ],
        value: fileName
      });
    },

    onRemove: function () {
      this.image = '';
      this.$emit('input-change', {
        parents: [ ...this.parents, this.field ],
        value: ''
      });
    },

    createImage(file) {
      const image = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    ...mapActions(['uploadFile'])
  },

  computed: {
    ...mapGetters('ConfigModule', [
      'fullUploadEndpoint'
    ]),

    generateInputId: function () {
      return this.parents.reduce((string, parent) => string.concat(parent.name + '-'), '').concat(this.field.name);
    },

    uploadLabel: function () {
      if (!this.image)
        return 'Upload';
      return 'Upload new one';
    }
  }
};