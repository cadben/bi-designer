<template>
    <vue-json-editor
      v-model="curValue"
      :expandedOnStart="false"
      mode="code"
      :show-btns="true"
      @json-save="onJsonChange"
    />
</template>
<script>
import vueJsonEditor from 'vue-json-editor';

export default {
  components: {
    vueJsonEditor,
  },
  props: {
    value: {
      type: Array,
      require: true,
      default: null,
    },
    options: {
      type: Array,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      curValue: this.value,
    };
  },
  methods: {
    onJsonChange(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style>

</style>
