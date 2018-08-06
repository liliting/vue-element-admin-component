<template>
  <el-form-item :label="field.name">
    <el-checkbox-group v-model="formData[field.field]">
      <el-checkbox v-for="(item,key) in field.map" :label="key" :key="key" :checked=" ( field.value && field.value.includes(key) )">{{item}}</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>
<script>

export default {
  name: 'CheckBox',
  data () {
    return {
      formData: this.initElementData(this.field.field, this.field.value)
    }
  },
  props: [ 'field' ],
  methods: {
    initElementData: function (key, value) {
      var model = {}
      model[key] = value || []
      return model
    },
    checkElementLegal () {
      return this.formData[this.field.field].length > 0
    },
    getElementData: function () {
      return this.formData
    }
  }
}
</script>
