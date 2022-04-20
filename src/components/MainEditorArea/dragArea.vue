<template>
    <div
      class="dragArea"
      @dragover.prevent
      @drop="(e) => addComponent(e)"
    >
      <vue-draggable-resizable
        v-for="item in editorLayout"
        :key="item.id"
        :x="item.x"
        :y="item.y"
        :w="item.width"
        :h="item.height"
        :parent="true"
        :active="item.active"
        :is-conflict-check="true"
        :prevent-deactivation="true"
        @activated="onActivated(item)"
      >
        <component :is="`c-${item.data.type}`" :data="item"></component>
      </vue-draggable-resizable>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';
// eslint-disable-next-line import/extensions
import CText from './editorComponent/CText';

export default {
  props: {},
  components: {
    VueDraggableResizable,
    CText,
  },
  computed: {
    ...mapGetters(['editorLayout']),
  },
  data() {
    return {};
  },
  methods: {
    addComponent(e) {
      const componentName = e.dataTransfer.getData('componentId');
      this.$store.dispatch('handleAddComponent', componentName);
    },
    onActivated(e) {
      this.editorLayout.forEach((element) => {
        const { id } = element;
        if (id === e.id) {
          // eslint-disable-next-line no-param-reassign
          element.active = true;
        } else {
          // eslint-disable-next-line no-param-reassign
          element.active = false;
        }
      });
      e.active = true;
    },
    onDeactivated(e) {
      console.log(e);
      e.active = false;
    },
  },
};
</script>
<style lang="less" scoped>
.dragArea {
  width: 100%;
  height: 100%;
  background: #fff;
  .resize {
    border: 1px solid transparent;
    cursor: move;
  }
  .active-resize {
    border: 1px solid #000
  }
}
</style>
