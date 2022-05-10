<template>
    <div :style="dragAreaOutStyle">
      <div
        ref="dragArea"
        class="dragArea"
        :style="scaleStyle"
        @dragover.prevent
        @drop="(e) => addComponent(e)"
        @click="clearListener()"
      >
        <vue-draggable-resizable
          v-for="item in editorLayout"
          :id="item.id"
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
          @deactivated="onDeactivated(item)"
          @resizing="(x, y, w, h) => handleResize(item, x, y, w, h)"
          @dragging="(x, y, w, h) => handleDrag(item, x, y, w, h)"
          @dragstop="stopDrag"
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
        <div
          v-for="item in showRefrenceList['x']"
          :key="item"
          class="vertical-refrence"
          :style="`left: ${item}px`"
        >
        </div>
        <div
          v-for="item in showRefrenceList['y']"
          :key="item"
          class="horizontal-refrence"
          :style="`top: ${item}px`">
        </div>
      </div>
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
  props: {
    scaleNum: {
      type: Number,
      require: false,
    },
  },
  components: {
    VueDraggableResizable,
    RightBar,
    ...MyComponents,
  },
  computed: {
    ...mapGetters(['editorLayout']),
    scaleStyle() {
      return `
        transform: scale(${this.scaleNum});
        left: ${this.scaleNum < 0.5 ? `${200 * (2 - this.scaleNum)}px` : '100px'};
        top: ${this.scaleNum < 0.5 ? `${100 * (2 - this.scaleNum)}px` : '100px'};
      `;
    },
    rightContextStyle() {
      const { location } = this.rightContextConfig;
      return {
        left: `${location.x}px`,
        top: `${location.y}px`,
      };
    },
    dragAreaOutStyle() {
      const left = this.scaleNum < 0.5 ? `${300 * (1 - this.scaleNum)}` : 100;
      const top = this.scaleNum < 0.5 ? `${340 * (1 - this.scaleNum)}` : 100;
      return `
        width: ${this.scaleNum * 1920 + 2 * left}px;
        height: ${this.scaleNum * 1080 + 2 * top}px;
      `;
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
      showRefrenceList: {
        x: [],
        y: [],
      },
    };
  },
  mounted() {
    this.$refs.dragArea.addEventListener('click', (e) => {
      e.stopPropagation();
      const c = e.target.getAttribute('class');
      if (c === 'dragArea') {
        this.editorLayout.forEach((element) => {
          // eslint-disable-next-line no-param-reassign
          element.active = false;
        });
      }
    });
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
      console.log(e);
    },
    stopDrag() {
      this.showRefrenceList = {
        x: [],
        y: [],
      };
    },
    handleDrag(e, x, y) {
      let finalX = x;
      let finalY = y;
      const showXList = [];
      const showYList = [];
      const getRefrenceLines = (item) => {
        let curX = [];
        let curY = [];
        for (let i = 0; i < this.editorLayout.length; i += 1) {
          if (item.id === this.editorLayout[i].id) {
            // eslint-disable-next-line no-continue
            continue;
          }
          const {
            x: X, y: Y, width, height,
          } = this.editorLayout[i];
          curX = curX.concat(X, X + width);
          curY = curY.concat(Y, Y + height);
        }
        return {
          x: [960, ...curX],
          y: [540, ...curY],
        };
      };
      const currentRefrenceList = getRefrenceLines(e);
      for (let i = 0; i < currentRefrenceList.x.length; i += 1) {
        const cur = currentRefrenceList.x[i];
        if (finalX === cur) {
          return;
        }
        if (Math.abs(finalX - cur) <= 30) {
          // const dom = document.getElementById(`${e.id}`);
          // console.log(dom.style);
          // dom.style.transform = `translate(${cur}px, ${y}px)`;
          showXList.push(cur);
          finalX = cur;
        }
      }
      for (let i = 0; i < currentRefrenceList.y.length; i += 1) {
        const cur = currentRefrenceList.y[i];
        if (finalY === cur) {
          return;
        }
        if (Math.abs(finalY - cur) <= 30) {
          showYList.push(cur);
          finalY = cur;
        }
      }
      this.showRefrenceList = {
        x: showXList,
        y: showYList,
      };
      for (let i = 0; i < this.editorLayout.length; i += 1) {
        const element = this.editorLayout[i];
        const { id } = element;
        if (id === e.id) {
          element.x = finalX;
          element.y = finalY;
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
  width: 1920px;
  height: 1080px;
  background: rgba(255, 255, 255, 0.747);
  position: relative;
  transform-origin: 0px 0px;
  transition: all 0.2s ease 0s;
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
  .horizontal-refrence {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 0, 0, 0.5);
    position: absolute;
  }
  .vertical-refrence {
    height: 100%;
    width: 1px;
    background-color: rgba(255, 0, 0, 0.5);
    position: absolute;
  }
}
</style>
