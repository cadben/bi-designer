<template>
    <div
      class="dragArea"
      ref="dragAreaRef"
      @dragover.prevent
      @drop="(e) => addComponent(e)"
      @click="clearListener()"
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
        @resizing="(x, y, w, h) => handleResize(item, x, y, w, h)"
        @dragging="(x, y, w, h) => handleDrag(item, x, y, w, h)"
        class="resize-box-class"
        class-name-active="active"
      >
        <div
          style="width: 100%; height: 100%;"
          @click="clearListener()"
          @contextmenu.prevent="(e) => handleShowRightBar(e, item)"
        >
          <component
            :is="`c-${item.data.type}`"
            :data="item"
          >
          </component>
        </div>
      </vue-draggable-resizable>
      <right-bar
        :right-context-config="rightContextConfig"
        :right-context-style="rightContextStyle"
        @handleDeleteCompoent="handleDeleteCompoent"
        @handleCopyCompoent="handleCopyCompoent"
        @handleTopCompoent="handleTopCompoent"
        @handleBottomCompoent="handleBottomCompoent"
      />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';
// // eslint-disable-next-line import/extensions
import MyComponents from './editorComponent/compoents';
import RightBar from '../rightBar.vue';

export default {
  props: {},
  components: {
    VueDraggableResizable,
    RightBar,
    ...MyComponents,
  },
  computed: {
    ...mapGetters(['editorLayout']),
    rightContextStyle() {
      const { location } = this.rightContextConfig;
      return {
        left: `${location.x}px`,
        top: `${location.y}px`,
      };
    },
  },
  data() {
    return {
      rightContextConfig: {
        showRightContextId: '',
        location: {
          x: 0,
          y: 0,
        },
      },
    };
  },
  mounted() {
  },
  methods: {
    addComponent(e) {
      const componentName = e.dataTransfer.getData('componentId');
      const { offsetX, offsetY } = e;
      this.$store.dispatch('handleAddComponent', {
        componentName,
        x: offsetX,
        y: offsetY,
      });
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
      e.active = false;
    },
    handleDrag(e, x, y) {
      for (let i = 0; i < this.editorLayout.length; i += 1) {
        const element = this.editorLayout[i];
        const { id } = element;
        if (id === e.id) {
          element.x = x;
          element.y = y;
        }
      }
    },
    handleResize(e, x, y, w, h) {
      for (let i = 0; i < this.editorLayout.length; i += 1) {
        const element = this.editorLayout[i];
        const { id } = element;
        if (id === e.id) {
          element.x = x;
          element.y = y;
          element.width = w;
          element.height = h;
        }
      }
    },
    handleShowRightBar(e, item) {
      const { offsetX, offsetY } = e;
      const { id, x, y } = item;
      this.rightContextConfig = {
        showRightContextId: id,
        location: {
          x: offsetX + x,
          y: offsetY + y,
        },
      };
    },
    clearListener() {
      this.rightContextConfig.showRightContextId = '';
    },
    handleDeleteCompoent() {
      const { showRightContextId } = this.rightContextConfig;
      if (!showRightContextId) {
        return;
      }
      this.$store.dispatch('handleDeleteCompoent', { id: showRightContextId });
      if (this.editorLayout.length > 0) {
        this.editorLayout[this.editorLayout.length - 1].active = true;
      }
    },
    handleCopyCompoent() {
      const { showRightContextId } = this.rightContextConfig;
      if (!showRightContextId) {
        return;
      }
      this.$store.dispatch('handleCopyCompoent', { id: showRightContextId });
      if (this.editorLayout.length > 0) {
        this.editorLayout[this.editorLayout.length - 1].active = true;
      }
    },
    handleTopCompoent() {
      const { showRightContextId } = this.rightContextConfig;
      if (!showRightContextId) {
        return;
      }
      this.$store.dispatch('handleTopCompoent', { id: showRightContextId });
    },
    handleBottomCompoent() {
      const { showRightContextId } = this.rightContextConfig;
      if (!showRightContextId) {
        return;
      }
      this.$store.dispatch('handleBottomCompoent', { id: showRightContextId });
    },
  },
};
</script>
<style lang="less" scoped>
.dragArea {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 10%, rgba(0, 0, 0, 0) 10%),
  linear-gradient(360deg, rgba(50, 0, 0, 0.05) 10%, rgba(0, 0, 0, 0) 10%);
  background-size: 20px 20px;
  position: relative;
  .resize-box-class {
    border: 1px solid transparent;
  }
  .active {
    border: 1px solid #000;
  }
  .resize {
    border: 1px solid transparent;
    cursor: move;
  }
  .active-resize {
    border: 1px solid #000;
  }
}
</style>
