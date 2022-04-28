<template>
  <div>
    <CSelectGroupVue :options="typeOptions"/>
    <vue-json-editor
      v-model="curValue"
      :expandedOnStart="false"
      mode="code"
      :show-btns="true"
      @json-save="onJsonChange"
    />
    <el-input size="mini" />
  </div>
</template>
<script>
import vueJsonEditor from 'vue-json-editor';
import CSelectGroupVue from './CSelectGroup.vue';

export default {
  components: {
    vueJsonEditor,
    CSelectGroupVue,
  },
  props: {
    config: {
      type: Array,
      require: true,
      default: null,
    },
    typeOptions: {
      type: Array,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      typeValue: this.config.dataType,
      curValue: this.config.value,
      curUrl: this.config.dataUrl,
    };
  },
  mounted() {
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
