<template>
    <div class="dragArea">
      <draggable style="height: 100%; width: 100%;" group="component">
      </draggable>
    </div>
</template>
<script>
import draggable from 'vuedraggable';

export default {
  props: {},
  components: {
    draggable,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.dragArea {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
