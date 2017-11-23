import draggable from 'vuedraggable';

import Field from '@/components/Field';
import BreadCrumbs from '@/components/BreadCrumbs';
import ToolTip from '@/components/ToolTip';
import TypeObject from '@/components/TypeObject';
import RemoveBtn from '@/components/Buttons/Delete';
import AddBtn from '@/components/Buttons/Add';

// TODO: props refactor
export default {
  name: 'TypeArray',
  props: ['field', 'blocks', 'contents', 'parents'],
  components: {
    Field,
    BreadCrumbs,
    ToolTip,
    TypeObject,
    draggable,
    RemoveBtn,
    AddBtn
  },

  data () {
    return {
      open: false
    }
  },

  methods: {
    toggleVisibility: function () {
      this.open = !this.open;
    },

    addBlock: function (typeName) {
      let block = this.blocksToUse.find(block => block.typeName === typeName);
      console.log({parents: [...this.parents, this.field],
        value: {
          typeName
        },
        fields: block.fields})
      this.$emit('add-item', {
        parents: [...this.parents, this.field],
        value: {
          typeName
        },
        fields: block.fields
      });
    },

    removeBlock: function (index) {
      this.$emit('remove-item', {
        parents: [...this.parents, this.field],
        index
      });
    },

    blockField: function (blockContents, blocksIndex) {
      let block = this.blocksToUse.find(block => block.typeName === blockContents.typeName);
      block = {
        ...block,
        name: blocksIndex.toString(),
        label: blockContents[block.fieldToUseAsPreview] || `new #${blocksIndex + 1}`
      };
      return block;
    },

    blockParents: function (index) {
      return [...this.parents, this.field];
    },

    onInputChange: function (infos) {
      this.$emit('input-change', infos);
    }
   },

  computed: {
    filteredContents: function () {
      return this.contents[this.field.name];
    },

    toggleMessage: function () {
      return this.open ? this.$t('collapse') : this.$t('expand');
    },

    blocksToUse: function () {
      return this.blocks[this.field.blocksStructure];
    },

    myList: {
      get () {
        return this.filteredContents;
      },
      set (value) {
        this.$emit('input-change', {
          parents: [ ...this.parents, this.field ],
          value
        });
      }
    }
  }
}