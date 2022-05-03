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
        @resizing="(x, y, w, h) => handleResize(item, x, y, w, h)"
        @dragging="(x, y, w, h) => handleDrag(item, x, y, w, h)"
        @contextmenu.prevent="handleShowRightBar(item.id)"
        class="default-class"
        class-name-active="active"
      >
        <component
          :is="`c-${item.data.type}`"
          :data="item"
        >
        </component>
      </vue-draggable-resizable>
      <div v-show="showRightContextId" class="rightBar">
        <div class="bar-item">删除</div>
      </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';
// // eslint-disable-next-line import/extensions
import MyComponents from './editorComponent/compoents';

export default {
  props: {},
  components: {
    VueDraggableResizable,
    // CText,
    // CTable,
    // CImage: CImg,
    ...MyComponents,
  },
  computed: {
    ...mapGetters(['editorLayout']),
  },
  data() {
    return {
      showRightContextId: '',
    };
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
    handleShowRightBar(id) {
      console.log(123);
      this.showRightContextId = id;
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
  .default-class {
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
  .rightBar {
    width: 120px;
    padding: 10px 0px;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.096);
    position: absolute;
    .bar-item {
      transition: 0.2s linear;
      padding: 5px 5px;
      font-size: 13px;
      &:hover {
        cursor: pointer;
        color: #409eff;
        background-color: #ecf5ff;
      }
    }
  }
}
</style>
